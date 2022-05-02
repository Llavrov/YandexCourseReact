import React, {useRef} from 'react';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import componentStyle from './BurgerConstructor.module.css';
import {useDispatch} from "react-redux";
import {DELETE_CONSTRUCTOR_ITEM} from "../../redux/actions/constructor";
import {useDrag, useDrop} from "react-dnd";
import {TypesData} from "../../utils/types";
import PropTypes from "prop-types";

function BasketItem({item, moveCard, index}) {
    const dispatch = useDispatch();
    function handleCloseItem() {
        dispatch({
            type: DELETE_CONSTRUCTOR_ITEM,
            item: item,
        })
    }
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: 'component',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(itemHover, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = itemHover.index
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            itemHover.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'component',
        // item: () => ({ ...item, index }),
        item: () => ({ id: item._id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    if (item.type !== 'bun') {
        drag(drop(ref));
    }
    const preventDefault = (e) => e.preventDefault();


    return (
        <div
            index={index}
            ref={ref}
            style={{ opacity }}
            onDrop={preventDefault}
            data-handler-id={handlerId}
            className={componentStyle.backetItem}
        >
            <span className={'pr-2'}><DragIcon type="primary"/></span>
            <ConstructorElement
                handleClose={handleCloseItem}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}

BasketItem.propTypes = {
    item: TypesData,
    moveCard: PropTypes.func,
    index: PropTypes.number
}


export default BasketItem;
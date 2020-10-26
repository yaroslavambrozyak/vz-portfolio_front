import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import style from './GridView.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function GridView(props) {

    const array_move = (arr, old_index, new_index) => {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    };

    const SortableItem = SortableElement(({ value }) => <img className={style.sortable_art} src={value}></img>);

    const SortableList = SortableContainer(({ items }) => {
        return (
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${value.id}`} index={index} value={value.imageUrl} />
                ))}
            </ul>
        );
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let sorted = array_move(props.arts, oldIndex, newIndex);
        //setItems(sorted);
    };

    let catego = props.categories.map(c => {
        return { value: c.id, label: c.name };
    })
    const defaultOption = catego[0];
    return (
        <div>
            <Dropdown options={catego} onChange={(x) => { console.log(x) }} value={defaultOption} placeholder="Select an option" />;
            <SortableList items={props.arts} onSortEnd={onSortEnd} axis={'x'} />
            <button>Submit</button>
        </div>
    )
}

export default GridView;
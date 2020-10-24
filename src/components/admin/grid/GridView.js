import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import style from './GridView.module.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function GridView(props) {

    const items = [
        { id: '1as', url: 'https://cdna.artstation.com/p/assets/images/images/030/367/894/large/vlx-zvarun-study16.jpg?1600376547' },
        { id: 'qwe2', url: 'https://cdnb.artstation.com/p/assets/images/images/029/955/871/large/vlx-zvarun-study15.jpg?1599143882' },
        { id: 'fre3', url: 'https://cdna.artstation.com/p/assets/images/images/028/866/934/large/vlx-zvarun-limbo.jpg?1595770057' },
        { id: 'qwef2', url: 'https://cdnb.artstation.com/p/assets/images/images/028/673/667/large/vlx-zvarun-dante-break-solo.jpg?1595176133' },
        { id: 'qwec3r54', url: 'https://cdnb.artstation.com/p/assets/images/images/028/412/651/large/vlx-zvarun-study-8.jpg?1594394775' }
    ]

    const [itemsArr, setItems] = useState(items);

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
                    <SortableItem key={`item-${value.id}`} index={index} value={value.url} />
                ))}
            </ul>
        );
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let sorted = array_move(itemsArr, oldIndex, newIndex);
        setItems(sorted);
    };

    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <div>
            <Dropdown options={options} onChange={(x)=>{console.log(x)}} value={defaultOption} placeholder="Select an option" />;
            <SortableList items={itemsArr} onSortEnd={onSortEnd} axis={'x'} />
            <button>Submit</button>
        </div>
    )

}

export default GridView;
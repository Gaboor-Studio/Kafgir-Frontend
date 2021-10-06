import React, { useEffect, useState } from "react";
import { adminFoodService } from "../.././../../../services/admin-food.service"
import classes from "./AddTag.module.css"

const AddTag = (props) => {
    const [tags, setTags] = useState([]);
    const [addedTags, setAddedTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(0);

    const config = {
        headers: {
            "content-type": "application/json",
            Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
        }
    }

    const addToTags = () => {
        if (!(addedTags.find(item => item[0] === selectedTag))){
            setAddedTags(oldTags => [...oldTags, [selectedTag, tags.find(item => item.id === selectedTag).title]]);
            props.updateTags(selectedTag);
        }
    }

    useEffect(() => {
        adminFoodService.fetchTags()
            .then(res => makeTagsList(res))
            .catch(err => console.error(err));
    }, [])

    const makeTagsList = (res) => {
        setTags(res.data);
        setSelectedTag(res.data[0].id);
    }

    return (
        <div className={classes.container}>
            <div className={classes.addTagContainer}>
                <select className={classes.selectTag} onChange={event => setSelectedTag(parseInt(event.target.value))}>
                    {tags.map(tag => <option key={tag.id} value={tag.id}>{tag.title}</option>)}
                </select>
                <button className={classes.addTagButton} onClick={addToTags}>افزودن تگ</button>
                {addedTags.map(addedTag => <p key={addedTag[0]} className={classes.tagBox}>{addedTag[1]}</p>)}
            </div>
        </div>
    );
}

export default AddTag;
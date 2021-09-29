import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./TagsAndCategoriesPanel.module.css";

import {adminTagService} from '../../../../../services/admin-tag.service'

import Header from "./Header";
import ManageTagRow from "./ManageTagRow/ManageTagRow";
import ConfirmModal from "../../../../UI/Modal/ConfirmModal/ConfirmModal";
import AddNewTagForm from "./AddNewTagForm/AddNewTagForm";

const TagsAndCategoriesPanel = () => {
  const [tags, setTags] = useState([]);
  const [newTagModalOpen, setNewTagModalOpen] = useState(false);
  const [newTagForm, setNewTagForm] = useState({
    title: "",
    is_main: false,
    is_primary: false,
    display_order: 0,
  });

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    adminTagService.fetchTags()
        .then(res => setTags(res.data))
        .catch(err => console.error(err));
  }

  const addTag = (data) => {
    adminTagService.postTag(data)
        .then(res => {console.log(res); onTagFormClearHandler(); onCloseTagForm(); fetchData();})
        .catch(err => console.error(err.response));
  }

  const editTag = (id, data) => {
    return adminTagService.editTag(id, data)
        .then(res => {console.log(res); fetchData(); return res;})
        .catch(err => console.error(err))
  }

  const removeTag = (id) => {
      return adminTagService.removeTag(id)
        .then(res => {console.log(res); fetchData(); return res;})
        .catch(err => console.error(err))
  }

  const onTagFormTitleChangeHandler = (event) => {
    event.persist();
    setNewTagForm((prevForm) => {
      return {
        ...prevForm,
        title: event.target.value,
      };
    });
  };

  const onTagFormPriorityChangeHandler = (event) => {
    event.persist();
    if (parseInt(event.target.value, 10) >= 0) {
      setNewTagForm((prevForm) => {
        return {
          ...prevForm,
          display_order: event.target.value,
        };
      });
    }
  };

  const onTagFormMainChangeHandler = (newState) => {
    setNewTagForm((prevForm) => {
      return {
        ...prevForm,
        is_main: newState,
      };
    });
  };

  const onTagFormPrimaryChangeHandler = (newState) => {
    setNewTagForm((prevForm) => {
      return {
        ...prevForm,
        is_primary: newState,
      };
    });
  };

  const onTagFormClearHandler = () => {
      setNewTagForm({
        title: "",
        is_main: false,
        is_primary: false,
        display_order: 0,
      })
  }

  const onCloseTagForm = () => {
    setNewTagModalOpen(false);
  };

  const onOpenTagForm = () => {
    setNewTagModalOpen(true);
  };

  let newTagModal = (
    <AddNewTagForm
      form={newTagForm}
      onTagFormTitleChange={onTagFormTitleChangeHandler}
      onTagFormPriorityChange={onTagFormPriorityChangeHandler}
      onTagFormMainChange={onTagFormMainChangeHandler}
      onTagFormPrimaryChange={onTagFormPrimaryChangeHandler}
    />
  );

  return (
    <div className={classes.TagsAndCategoriesPanel}>
      <ConfirmModal
        show={newTagModalOpen}
        proceed={() => addTag(newTagForm)}
        modalClosed={onCloseTagForm}
        message={newTagModal}
      />
      <Header onSearch={() => {}} title="تگ ها" />
      <div className={classes.TableHeader}>
        <h4>آی‌دی</h4>
        <h4>عنوان</h4>
        <h4>صفحه اصلی</h4>
        <h4>تگ اصلی</h4>
        <h4>اولویت نمایش</h4>
        <button type="button" onClick={onOpenTagForm}>
          تگ جدید
        </button>
      </div>
      <hr className={classes.TagsAndCategoriesPanelHr} />
      <div className={classes.TableRows}>
        {tags.map((tag) => (
          <React.Fragment key={tag.id}>
            <ManageTagRow tag={tag} onEdit={(data) => editTag(tag.id, data)} onRemove={() => removeTag(tag.id)}/>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TagsAndCategoriesPanel;

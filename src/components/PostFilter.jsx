import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFliter({filter, setFilter}) {
  return(
    <div>
        <MyInput
          value={filter.value}
          onChange={(e) => setFilter({...filter, query:e.target.value})}
          placeholder="поиск"
        />
        <MySelect
          value={filter.sort}
          onChange={sortPosts => setFilter({...filter, sort: sortPosts})}
          defaultValue={"сортировка по"}
          options={[
            { value: "title", name: "по названию" },
            { value: "body", name: "по описанию" },
          ]}
        />
      </div>
  )
}

export default PostFliter;
import React from "react";
import "./fileList.scss";
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
  const files = useSelector((state) => state.files.files).map((file) => (
    <File key={file._id} file={file} />
  ));

  return (
    <div className="fileList">
      <div className="fileList__header">
        <div className="fileList__name">Название</div>
        <div className="fileList__date">Дата</div>
        <div className="fileList__size">Размер</div>
      </div>
      {files}
    </div>
  );
};

export default FileList;

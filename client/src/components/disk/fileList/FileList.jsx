import React from "react";
import "./fileList.scss";
import { useSelector } from "react-redux";
import File from "./file/File";

const FileList = () => {
  // const files = useSelector((state) => state.files.files).map((file) => (
  //   <File />
  // ));
  const files = [
    { _id: 1, name: "direc", type: "dir", size: "5gb", date: "20.02.2020" },
    { _id: 2, name: "direc2", type: "dir", size: "8gb", date: "21.02.2020" },
    { _id: 3, name: "direc3", type: "dir", size: "4gb", date: "22.02.2020" },
  ].map((file) => <File key={file.id} />);

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

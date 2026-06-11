import React from "react";
import "./styles.css";
import {ClassData} from "@site/src/components/DataListFeatures/DataList";

type Props = {
    classes: ClassData[];
    selectedClass: ClassData;
    onSelectClass: (classData: ClassData) => void;
}

const ClassList: React.FC<Props>
    = ({classes, selectedClass, onSelectClass}) => {
    return (
        <div className="sidebar list-scroll-lock">
            <h2 className="sidebar-title">クラス一覧</h2>
            {classes.sort((a, b) => {
                return a.name.localeCompare(b.name);
            }).map((classData) => (
                <button
                    key={classData.name}
                    className={`list-button ${selectedClass === classData ? "active" : ""}`}
                    onClick={() => onSelectClass(classData)}
                >
                    {classData.name}
                </button>
            ))}
        </div>
    );
};

export default ClassList;
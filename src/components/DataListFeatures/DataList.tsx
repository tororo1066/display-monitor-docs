import React, {useEffect, useState} from "react";
import TabBar from "./TabBar";
import ClassList from "./ClassList";
import ParameterList from "./ParameterList";
import ParameterDetail from "./ParameterDetail";
import ClassDetail from "@site/src/components/DataListFeatures/ClassDetail";
import {CacheContext} from "@site/src/components/DataListFeatures/CacheSystem";

export type Category = {
    name: string,
    classes: ClassData[]
}

export type ClassData = {
    name: string
    description: string
    parameters: Parameter[]
}

export type Parameter = {
    name: string
    description: string
    type: String
}

const DataList: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState<Category>();
    const [selectedClass, setSelectedClass] = useState<ClassData>();
    const [selectedParameter, setSelectedParameter] = useState<Parameter>();

    const [cache] = React.useContext(CacheContext)

    const loadHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const [categoryName, className, paramName] = hash.substring(1).split("/");
            const category = cache.Categories.find((category) => category.name === categoryName);
            if (category) {
                setSelectedCategory(category);
                const classData = category.classes.find((classData) => classData.name === className);
                if (classData) {
                    setSelectedClass(classData);
                    const param = classData.parameters.find((param) => param.name === paramName);
                    if (param) {
                        setSelectedParameter(param);
                    } else {
                        setSelectedParameter(undefined);
                    }
                } else {
                    setSelectedClass(undefined);
                    setSelectedParameter(undefined);
                }
            } else {
                setSelectedCategory(undefined);
                setSelectedClass(undefined);
                setSelectedParameter(undefined);
            }
        }
    }

    useEffect(() => {
        loadHash();
        window.addEventListener("hashchange", loadHash);
        return () => window.removeEventListener("hashchange", loadHash);
    }, [cache.Categories]);

    return (
        <div className="container">
            <TabBar categories={cache.Categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={(category) => {
                        setSelectedCategory(category)
                        setSelectedClass(undefined)
                        setSelectedParameter(undefined)
                        window.location.hash = `#${category.name}`
                    }}
            />
            <div className="main-content">
                {/* クラス一覧 */}
                <ClassList
                    classes={selectedCategory ? selectedCategory.classes : []}
                    selectedClass={selectedClass}
                    onSelectClass={(className) => {
                        setSelectedClass(className);
                        setSelectedParameter(undefined); // クラス変更時にパラメータ選択をリセット
                        window.location.hash = `#${selectedCategory.name}/${className.name}`
                    }}
                />
                
                <ClassDetail selectedClass={selectedClass} />

                {/* パラメータ一覧 */}
                <ParameterList
                    parameters={selectedClass ? selectedClass.parameters: []}
                    selectedParameter={selectedParameter}
                    onSelectParameter={(param) => {
                        setSelectedParameter(param);
                        window.location.hash = `#${selectedCategory.name}/${selectedClass.name}/${param.name}`
                    }}
                />

                {/* パラメータ詳細 */}
                <ParameterDetail selectedParameter={selectedParameter} />
            </div>
        </div>
    );
};

export default DataList;

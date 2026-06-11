import React from "react";
import {Category} from "@site/src/components/DataListFeatures/DataList";

type Props = {
    categories: Category[];
    selectedCategory: Category;
    onSelectCategory: (category: Category) => void;
}

const TabBar: React.FC<Props> =
    ({categories, selectedCategory, onSelectCategory}) => {
        return (
            <div className="tab-bar">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={`tab-button ${selectedCategory == category ? "active" : ""}`}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        )
    };

export default TabBar;
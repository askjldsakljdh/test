"use client";

import { useState } from "react";

import classNames from "classnames";
import styles from "./styles.module.scss";
import { HalfArrowDownIcon } from "@/components/icons/HalfArrowDownIcon";
import Button from "../Button";
import { IDropdownItem } from "./types";

type Props = {
  items: IDropdownItem[];
  className?: string;
}

export const Dropdown = ({ items, className }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("en");
  
  return (
    <div className={classNames(styles.dropdown, className)}>
      <Button className={styles.dropdownButton} onClick={() => setDropdownOpen(prev => !prev)}>
        <span>
          {items.find(item => item.value === selectedItem)?.icon}
          <h4>{items.find(item => item.value === selectedItem)?.label}</h4>
        </span>
        <HalfArrowDownIcon />
      </Button>
      {
        dropdownOpen
          ? (
              <div className={classNames(styles.dropdownList, {[styles.open]: dropdownOpen})}>
                {
                  items.map(item => (
                    <span className={styles.dropdownListItem} key={item.value} onClick={() => {
                      setSelectedItem(item.value);
                      setDropdownOpen(false);
                    }}>
                      {item.icon}
                      <h4>{item.label}</h4>
                    </span>
                  ))
                }
              </div>
            )
          : null
      }
    </div>
  );
}
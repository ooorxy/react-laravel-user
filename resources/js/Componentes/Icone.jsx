import Icon from "@mdi/react";
import * as icon from "@mdi/js";

export default function Icone ({ iconName, size = 1 }) {
    if (!icon[`mdi${iconName}`]) {
        return;
    }

    return (
        <Icon path={icon[`mdi${iconName}`]}
              size={size}
              className="dark:text-white"
        />
    )
}

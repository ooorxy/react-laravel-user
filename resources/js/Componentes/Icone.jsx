import Icon from "@mdi/react";
import * as icon from "@mdi/js";

export default function Icone ({ iconName }) {
    if (!icon[`mdi${iconName}`]) {
        return;
    }

    return (
        <Icon path={icon[`mdi${iconName}`]}
              size={1}
              className="dark:text-white"
        />
    )
}

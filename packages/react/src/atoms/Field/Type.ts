enum TextFieldSize {
  SMALL = "sm",
  LARGE = "lg",
}
enum TextFieldRadius {
  LEFT = "lt",
  RIGHT = "rt",
  BOTH = "",
}

interface IconValue {
  iconCssValue: string;
  eventHanlder: Function;
}

interface TextFiedType {
  type?: string;
  placeholder?: string;
  typeEventHandler?: Function;
  size?: TextFieldSize;
  leftIcon?: IconValue;
  rightIcon?: IconValue;
  radius?: TextFieldRadius;
}

export type { TextFiedType, IconValue };
export { TextFieldSize, TextFieldRadius };

import React from "react";
import { Svg, Path, Rect, Pattern, Defs, Use, Image } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Exclamation = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Rect width="20" height="20" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          {/* <Use xlink:href="#image0_1_308" transform="scale(0.0111111)" /> */}
        </Pattern>
        <Image
          id="image0_1_308"
          width="90"
          height="90"
          //   xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADD0lEQVR4nO3cT4jMYRgH8OGyHMiFEydOnDhxsnHYC06c1kHkwMmug1yMg3LQqp+a+X2/78w2yoEUUhJplySSSEoc5N9aB5uDYiMy+tmR6/yep/bpmXk+Ncfp9+3b2zvvvPO+U6mEEEIIIYQQQugeyRmSbckLwKcSj+pvAKYVRU9Z53cDwGtp0SRfWed3g+QLRdHPrfO7QfKpougn1vndIPlQMUc/sM7vBoC7iqLvWOd3A8AtxdRx0zq/GySvKUb0Vev8bgC4rBjRF63zuwHgvKLoc9b53SB5VlF00zq/G5wjnaNr1vndIHlGUfRp6/xuADilmDpOWud3A8AJRdHHrfO7QfKYouij1vndAHBEUfSIdX43ABxSFH3QOr8bJA9Ii87zfJ91fjdI7lUs73Zb53cjpTSsmDp2Wed3I8/znYqid1jndwPAdmnRKaUh6/xupJSGFB+Gg9b53cjzfFAxojda53cDwCZp0fV6fb11fjdIblBMHWut87uRUlqnWHWsts7vRqPRWKOYo1da53ejVqutkhY9Pj6+3Dq/G/V6fYW06CzLllrnd6PVai1TFD1gnd+NsbGxxZKSAfxut9sLrPO7Ua1WFwpH9Hfr7O6Q/Cko+ot1bncAfBVMHXF/pSwAnwVFx/2Vskh+FEwdcX+lLJJvBEXH/ZWySL4UFP249IP6HclngqLvW+d2h+QjQdG3rXO7Q/KeYNVxwzq3OwAmBEXH/ZWyAFwXTB1xf6UsklcERcf9lbJIXhAUHfdXQgghhBBCCKHnZFk2UNy06nwlf0fyG8lZku+LTaSU0v7iHIh1TvcH0gFMdbFrNw1gq3VezyX/KLFF+iultM06tyvNZnNJcUZDsKk0U7zXOr8bJEcEJf8b2aPW+Xv61xX+L3rCOn+vH55pd14frPO7wbklnLToWev8ffH/0YwR3T2Sk4qiJ0s8qr8BGFUUfdg6f1+so7O4LFROfDOcRyQ3F5tH3XwAppS2zGe2nty9SyntIXmpc2b67+4dgLfFjl6xs9dqtRZZ5wwhhBBCCCGEild/AJjFLOavM5DpAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
};

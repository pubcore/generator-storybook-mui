import { addDecorator } from "@storybook/react";
import { AppDecorator } from "../src/AppDecorator";
import { useDarkMode } from "storybook-dark-mode";

addDecorator(AppDecorator({ useDarkMode }));

export const parameters = { layout: "fullscreen" };

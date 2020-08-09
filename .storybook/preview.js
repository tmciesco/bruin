import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { standard, GlobalStyle } from "../src/bruin/themes"

addDecorator((story) => (
	<ThemeProvider theme={standard}>
		<GlobalStyle />
		{story()}
	</ThemeProvider>
))

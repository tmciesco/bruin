import React from "react"
import { Heading } from "../bruin"
import { withKnobs, select } from "@storybook/addon-knobs"

export default {
	title: "Heading",
	component: Heading,
	decorators: [withKnobs],
}

export const HeadingStory = () => {
	const selectedFontSize = select("fontSize", ["ti", "xs", "sm", "md", "lg", "xl", "hu"], "md")
	return <Heading fontSize={selectedFontSize}>This is a {selectedFontSize} heading.</Heading>
}

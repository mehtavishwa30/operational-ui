import * as React from "react"
import glamorous, { Div } from "glamorous"
import { Theme } from "@operational/theme"

import Avatar, { Picture as AvatarPicture, Container as AvatarContainer } from "../Avatar/Avatar"
import { WithTheme, Css, CssStatic } from "../types"

export interface AvatarItem {
  photo?: string
  name: string
}
export interface Props {
  /** `css` prop as expected in a glamorous component */
  css?: Css
  /** Class name */
  className?: string
  children?: React.ReactNode
  /** Avatars list */
  avatars?: AvatarItem[]
  /** Maximum avatar to be display on screen */
  maximumToDisplay?: number
  /** More button handlere */
  onMoreClick?: () => void
}

const Container = glamorous.div(
  ({ theme }: WithTheme): CssStatic => ({
    label: "avatar-group",
    display: "flex",
    "& :not(:first-child)": {
      marginLeft: theme.spacing * -1,
      "& > .opui_avatar-picture": { boxShadow: "-1px 0 0 1px white" },
    },
    "& .opui_name-container": {
      display: "none",
    },
  }),
)

const More: React.SFC<{ onClick: () => void }> = ({ children, onClick }) => (
  <AvatarContainer onClick={onClick}>
    <AvatarPicture className="opui_avatar-picture">{children}</AvatarPicture>
  </AvatarContainer>
)

const AvatarGroup: React.SFC<Props> = props => {
  const avatarsToDisplay = props.avatars ? props.avatars.map(avatar => <Avatar {...avatar} />) : props.children
  const count = React.Children.count(avatarsToDisplay)
  const mustSlice = props.maximumToDisplay < count

  return (
    <Container css={props.css} className={props.className}>
      {mustSlice ? React.Children.toArray(avatarsToDisplay).slice(0, props.maximumToDisplay - 1) : avatarsToDisplay}
      {mustSlice && <More onClick={props.onMoreClick}>+{count - props.maximumToDisplay + 1}</More>}
    </Container>
  )
}

AvatarGroup.defaultProps = {
  maximumToDisplay: 4,
}

export default AvatarGroup

import VText from '@/custom-component/v-text/Component.vue'
import VQuery from '@/custom-component/v-query/Component.vue'
import VTextAttr from '@/custom-component/v-text/Attr.vue'
import Group from '@/custom-component/group/Component.vue'
import GroupAttr from '@/custom-component/group/Attr.vue'
import UserView from '@/custom-component/user-view/Component.vue'
import UserViewAttr from '@/custom-component/user-view/Attr.vue'
import Picture from '@/custom-component/picture/Component.vue'
import PictureAttr from '@/custom-component/picture/Attr.vue'
import CanvasBoard from '@/custom-component/canvas-board/Component.vue'
import CanvasBoardAttr from '@/custom-component/canvas-board/Attr.vue'
import CanvasIcon from '@/custom-component/canvas-icon/Component.vue'
import CanvasIconAttr from '@/custom-component/canvas-icon/Attr.vue'
import DeTabs from '@/custom-component/de-tabs/Component.vue'
import DeTabsAttr from '@/custom-component/de-tabs/Attr.vue'
import DeGraphical from '@/custom-component/de-graphical/Component.vue'
import DeGraphicalAttr from '@/custom-component/de-graphical/Attr.vue'
import CircleShape from '@/custom-component/circle-shape/Component.vue'
import CircleShapeAttr from '@/custom-component/circle-shape/Attr.vue'
import RectShape from '@/custom-component/rect-shape/Component.vue'
import RectShapeAttr from '@/custom-component/rect-shape/Attr.vue'
import SvgTriangle from '@/custom-component/svgs/svg-triangle/Component.vue'
import SvgTriangleAttr from '@/custom-component/svgs/svg-triangle/Attr.vue'

export const componentsMap = {
  VText: VText,
  VQuery,
  VTextAttr: VTextAttr,
  Group: Group,
  GroupAttr: GroupAttr,
  UserView: UserView,
  UserViewAttr: UserViewAttr,
  Picture: Picture,
  PictureAttr: PictureAttr,
  CanvasBoard: CanvasBoard,
  CanvasBoardAttr: CanvasBoardAttr,
  CanvasIcon: CanvasIcon,
  CanvasIconAttr: CanvasIconAttr,
  DeTabs: DeTabs,
  DeTabsAttr: DeTabsAttr,
  DeGraphical: DeGraphical,
  DeGraphicalAttr: DeGraphicalAttr,
  CircleShape: CircleShape,
  CircleShapeAttr: CircleShapeAttr,
  RectShape: RectShape,
  RectShapeAttr: RectShapeAttr,
  SvgTriangle: SvgTriangle,
  SvgTriangleAttr: SvgTriangleAttr
}

export default function findComponent(key) {
  return componentsMap[key]
}

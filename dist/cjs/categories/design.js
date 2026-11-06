"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var design_exports = {};
__export(design_exports, {
  Axis3D: () => import_axis_3d.Axis3D,
  Blend: () => import_blend.Blend,
  Bold: () => import_letter_b.Bold,
  Brush: () => import_brush.Brush,
  BrushCleaning: () => import_brush_cleaning.BrushCleaning,
  Camera: () => import_camera.Camera,
  Circle: () => import_circle.Circle,
  Component: () => import_component.Component,
  Cone: () => import_cone.Cone,
  Contrast: () => import_contrast.Contrast,
  Crop: () => import_crop.Crop,
  Cuboid: () => import_cuboid.Cuboid,
  Cylinder: () => import_cylinder.Cylinder,
  Diamond: () => import_diamond.Diamond,
  DraftingCompass: () => import_drafting_compass.DraftingCompass,
  Frame: () => import_frame.Frame,
  Grid3x3: () => import_grid_3x3.Grid3x3,
  Group: () => import_group.Group,
  Heading2: () => import_heading_2.Heading2,
  Hexagon: () => import_hexagon.Hexagon,
  ImageIcon: () => import_image.ImageIcon,
  Italic: () => import_italic.Italic,
  Lasso: () => import_lasso.Lasso,
  Layers: () => import_layers.Layers,
  Layers2: () => import_layers_2.Layers2,
  LoaderPinwheel: () => import_loader_pinwheel.LoaderPinwheel,
  Moon: () => import_moon.Moon,
  Octagon: () => import_octagon.Octagon,
  PaintBucket: () => import_paint_bucket.PaintBucket,
  Paintbrush: () => import_paintbrush.Paintbrush,
  PaintbrushVertical: () => import_paintbrush_vertical.PaintbrushVertical,
  Palette: () => import_palette.Palette,
  PenSquare: () => import_square_pen.PenSquare,
  PencilLine: () => import_pencil_line.PencilLine,
  Pipette: () => import_pipette.Pipette,
  Pyramid: () => import_pyramid.Pyramid,
  RectangleVertical: () => import_rectangle_vertical.RectangleVertical,
  Ruler: () => import_ruler.Ruler,
  RulerDimensionLine: () => import_ruler_dimension_line.RulerDimensionLine,
  Shapes: () => import_shapes.Shapes,
  Signature: () => import_signature.Signature,
  Sparkles: () => import_sparkles.Sparkles,
  Spline: () => import_spline.Spline,
  SplinePointer: () => import_spline_pointer.SplinePointer,
  Square: () => import_square.Square,
  Squircle: () => import_squircle.Squircle,
  Stamp: () => import_stamp.Stamp,
  Strikethrough: () => import_strikethrough.Strikethrough,
  Sun: () => import_sun.Sun,
  SwatchBook: () => import_swatch_book.SwatchBook,
  Tangent: () => import_tangent.Tangent,
  Torus: () => import_torus.Torus,
  Triangle: () => import_triangle.Triangle,
  Underline: () => import_underline.Underline,
  Ungroup: () => import_ungroup.Ungroup,
  VectorSquare: () => import_vector_square.VectorSquare,
  Wand: () => import_wand.Wand,
  Wand2: () => import_wand_sparkles.Wand2
});
module.exports = __toCommonJS(design_exports);
var import_axis_3d = require("../icons/axis-3d.js");
var import_blend = require("../icons/blend.js");
var import_letter_b = require("../icons/letter-b.js");
var import_brush = require("../icons/brush.js");
var import_brush_cleaning = require("../icons/brush-cleaning.js");
var import_camera = require("../icons/camera.js");
var import_circle = require("../icons/circle.js");
var import_component = require("../icons/component.js");
var import_cone = require("../icons/cone.js");
var import_contrast = require("../icons/contrast.js");
var import_crop = require("../icons/crop.js");
var import_cuboid = require("../icons/cuboid.js");
var import_cylinder = require("../icons/cylinder.js");
var import_diamond = require("../icons/diamond.js");
var import_drafting_compass = require("../icons/drafting-compass.js");
var import_frame = require("../icons/frame.js");
var import_grid_3x3 = require("../icons/grid-3x3.js");
var import_group = require("../icons/group.js");
var import_heading_2 = require("../icons/heading-2.js");
var import_hexagon = require("../icons/hexagon.js");
var import_image = require("../icons/image.js");
var import_italic = require("../icons/italic.js");
var import_lasso = require("../icons/lasso.js");
var import_layers = require("../icons/layers.js");
var import_layers_2 = require("../icons/layers-2.js");
var import_loader_pinwheel = require("../icons/loader-pinwheel.js");
var import_moon = require("../icons/moon.js");
var import_octagon = require("../icons/octagon.js");
var import_paint_bucket = require("../icons/paint-bucket.js");
var import_paintbrush = require("../icons/paintbrush.js");
var import_paintbrush_vertical = require("../icons/paintbrush-vertical.js");
var import_palette = require("../icons/palette.js");
var import_square_pen = require("../icons/square-pen.js");
var import_pencil_line = require("../icons/pencil-line.js");
var import_pipette = require("../icons/pipette.js");
var import_pyramid = require("../icons/pyramid.js");
var import_rectangle_vertical = require("../icons/rectangle-vertical.js");
var import_ruler = require("../icons/ruler.js");
var import_ruler_dimension_line = require("../icons/ruler-dimension-line.js");
var import_shapes = require("../icons/shapes.js");
var import_signature = require("../icons/signature.js");
var import_sparkles = require("../icons/sparkles.js");
var import_spline = require("../icons/spline.js");
var import_spline_pointer = require("../icons/spline-pointer.js");
var import_square = require("../icons/square.js");
var import_squircle = require("../icons/squircle.js");
var import_stamp = require("../icons/stamp.js");
var import_strikethrough = require("../icons/strikethrough.js");
var import_sun = require("../icons/sun.js");
var import_swatch_book = require("../icons/swatch-book.js");
var import_tangent = require("../icons/tangent.js");
var import_torus = require("../icons/torus.js");
var import_triangle = require("../icons/triangle.js");
var import_underline = require("../icons/underline.js");
var import_ungroup = require("../icons/ungroup.js");
var import_vector_square = require("../icons/vector-square.js");
var import_wand = require("../icons/wand.js");
var import_wand_sparkles = require("../icons/wand-sparkles.js");

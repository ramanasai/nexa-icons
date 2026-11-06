//! A small GPUI window showing the Nexa icon catalogue.
//!
//! Run with:
//!
//! ```sh
//! CARGO_TARGET_DIR=/tmp/nexa-gpui-target cargo run --example icons
//! ```
//!
//! The window needs no assets on disk: [`NexaIconAssets`] generates every SVG
//! from the `nexa-icons` crate in memory. Click the theme pill to flip between
//! the Nexa light (`#fafafa`) and dark (`#0c0c0e`) palettes — icons follow the
//! ambient text color, exactly like `currentColor` on the web.

use gpui::{
    div, prelude::*, px, rgb, size, App, Application, Bounds, Context, Render, Window,
    WindowBounds, WindowOptions,
};
use nexa_icons_gpui::{icon, NexaIconAssets};

struct IconsExample {
    dark: bool,
}

impl IconsExample {
    fn new() -> Self {
        Self { dark: false }
    }
}

impl Render for IconsExample {
    fn render(&mut self, _window: &mut Window, cx: &mut Context<Self>) -> impl IntoElement {
        let (background, foreground, muted, border) = if self.dark {
            (rgb(0x0c0c0e), rgb(0xf4f4f5), rgb(0xa1a1aa), rgb(0x27272a))
        } else {
            (rgb(0xfafafa), rgb(0x18181b), rgb(0x71717a), rgb(0xe4e4e7))
        };
        let toggle_label = if self.dark {
            "Light theme"
        } else {
            "Dark theme"
        };
        let names = nexa_icons::names();

        let size_scale = [16.0_f32, 20.0, 24.0, 32.0, 40.0];
        let size_row =
            div()
                .flex()
                .flex_wrap()
                .gap_5()
                .items_center()
                .children(size_scale.into_iter().map(|pixels| {
                    div()
                        .flex()
                        .flex_col()
                        .items_center()
                        .gap_1()
                        .child(icon("bell").size(px(pixels)).text_color(foreground))
                        .child(
                            div()
                                .text_xs()
                                .text_color(muted)
                                .child(format!("{pixels}px")),
                        )
                }));

        let grid = div().flex().flex_wrap().gap_3().children(
            names
                .iter()
                .map(|name| icon(*name).size(px(24.0)).text_color(foreground)),
        );

        div()
            .flex()
            .flex_col()
            .size_full()
            .bg(background)
            .text_color(foreground)
            .p_6()
            .gap_4()
            .child(
                div()
                    .flex()
                    .items_center()
                    .justify_between()
                    .child(div().text_xl().child("Nexa Icons · GPUI"))
                    .child(
                        div()
                            .id("theme-toggle")
                            .px_3()
                            .py_1()
                            .rounded_md()
                            .border_1()
                            .border_color(border)
                            .cursor_pointer()
                            .text_sm()
                            .on_click(cx.listener(|this, _, _, cx| {
                                this.dark = !this.dark;
                                cx.notify();
                            }))
                            .child(toggle_label),
                    ),
            )
            .child(div().text_sm().text_color(muted).child(format!(
                "{} icons · one stroke language · size-aware stroke weights · inherited text color",
                names.len()
            )))
            .child(size_row)
            .child(div().h(px(1.0)).bg(border))
            .child(grid)
    }
}

fn main() {
    Application::new()
        .with_assets(NexaIconAssets::new())
        .run(|cx: &mut App| {
            let bounds = Bounds::centered(None, size(px(1120.0), px(760.0)), cx);
            cx.open_window(
                WindowOptions {
                    window_bounds: Some(WindowBounds::Windowed(bounds)),
                    ..Default::default()
                },
                |_window, cx| cx.new(|_cx| IconsExample::new()),
            )
            .expect("failed to open the Nexa Icons example window");
            cx.activate(true);
        });
}

# 說明
## HTML
```html
<div class="venus-container" id="venus-container">
        <div class="venus-base invisible">
            <img src="./imgs/火星.png" alt="">
        </div>
        <!-- ...... -->
    </div>
```
可加入 `<picture>` 元素使用響應式圖片、壓縮圖片尺寸可增加載入速度。

預先加入 `.invisible` 是怕圖片未完全加載就顯示會影響使用者體驗，在 JS 初始化後移除。

如果修改容器 `id="venus-container"` ，記得 JS 那邊也要修改。

## CSS

```css
.venus-base{
  position: absolute;
  transition-property: transform;
  transition-duration: 900ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  width: 598px;
  height: 600px;
}
```
900ms 可自行修改，數字越小，星球移動速度越快。

width, height 是星球基礎的尺寸，可自行修改。

## JS
`cur` 代表現在畫面中間顯示星球的索引。

### init()
網頁載入後必須呼叫此函式進行初始化。

如果不要自動轉就把 `setInterval` 拿掉。

### prev()
逆時針轉一格。

### next()
順時針轉一格。

### genStyle()
計算容器的尺寸以及星球的樣式。

如果要修改 **星球的位置、星球的大小** 在這裡改。

可判斷 `parentWidth` 來做響應式設計，例如 `parentWidth < 768px` 時，星球要變小顆就把 `scale` 調小。

- offsetX: 距離容器中心的 X 偏移量。
- offsetY: 距離容器中心的 Y 偏移量。
- scale: 星球的大小比例。

> 若需要改變視窗尺寸後也能 RWD (現在沒監聽，改變尺寸後要重新整理才有 RWD)，可監聽 window resize 事件後執行此函式。

## 補充
本段 Code 不支援 IE 瀏覽器。

本倉庫將在任務結束一週後移除，請視需要自行下載備份。

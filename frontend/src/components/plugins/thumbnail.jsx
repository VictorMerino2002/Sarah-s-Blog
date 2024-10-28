// pageThumbnailPlugin.js
import { Plugin } from '@react-pdf-viewer/core';

export const pageThumbnailPlugin = (PageThumbnail) => {
    return {
        renderViewer: (renderProps) => {
            let { slot } = renderProps;

            // Reemplaza el contenido del slot con la miniatura
            slot.children = PageThumbnail;

            // Resetea el sub slot
            slot.subSlot.attrs = {};
            slot.subSlot.children = <></>;

            return slot;
        },
    };
};

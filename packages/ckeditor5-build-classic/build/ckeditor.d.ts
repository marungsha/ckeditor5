/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { PictureEditing, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Alignment } from '@ckeditor/ckeditor5-alignment/src/index';
import { FontFamily, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font/src/index';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof TextTransformation | typeof Essentials | typeof Base64UploadAdapter | typeof UploadAdapter | typeof Paragraph | typeof Heading | typeof Autoformat | typeof Superscript | typeof Subscript | typeof Bold | typeof Italic | typeof Underline | typeof BlockQuote | typeof CloudServices | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageResizeEditing | typeof CKBox | typeof CKFinder | typeof EasyImage | typeof Indent | typeof Link | typeof List | typeof MediaEmbed | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof Alignment | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof SpecialCharacters | typeof SpecialCharactersEssentials | typeof ImageResizeHandles | typeof PictureEditing)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        fontFamily: {
            options: string[];
        };
        image: {
            toolbar: string[];
            resizeOptions: ({
                name: string;
                value: null;
                label: string;
            } | {
                name: string;
                value: string;
                label: string;
            })[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}

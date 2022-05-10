import { IAction } from "..";

export interface IGetBlogAction extends IAction {
    id: number
}

export interface IContent {
    alt: string;
    content: string;
    section: string;
}

export interface IBlogAssets {
    blog_banner_principal?: IContent;
    blog_background_recent?: IContent;
    blog_number_1?: IContent;
    blog_number_2?: IContent;
    blog_number_3?: IContent;
    blog_number_4?: IContent;
}
import moment from 'moment';
export const mapDribbleData = data => {
    let result = {};

    result.id = data.id;
    result.title = data.title;
    result.desc = data.description;
    result.views = data.views_count;
    result.likes = data.likes_count;
    result.comments = data.comments_count;
    result.created = moment().format(data.created_at, 'MMM DD YYYY');
    result.imgLink = data.images.normal;
    result.thumb = data.images.teaser;

    return result;
};

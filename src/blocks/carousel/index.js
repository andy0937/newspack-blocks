/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { IconCarousel } from '../../components/icons';

/**
 * Style dependencies - will load in editor
 */
import './view.scss';
import './editor.scss';

export const name = 'carousel';
export const title = __( 'Articles Carousel' );

export const icon = IconCarousel;

export const settings = {
	title,
	icon,
	category: 'newspack',
	keywords: [ __( 'posts' ), __( 'slideshow' ), __( 'carousel' ) ],
	description: __( 'A carousel of articles.' ),
	attributes: {
		className: {
			type: 'string',
		},
		autoplay: {
			type: 'boolean',
			default: false,
		},
		delay: {
			type: 'number',
			default: 5,
		},
		postsToShow: {
			type: 'integer',
			default: 3,
		},
		authors: {
			type: 'array',
		},
		categories: {
			type: 'array',
		},
		tags: {
			type: 'array',
		},
		showDate: {
			type: 'boolean',
			default: true,
		},
		showAuthor: {
			type: 'boolean',
			default: true,
		},
		showAvatar: {
			type: 'boolean',
			default: true,
		},
		showCategory: {
			type: 'boolean',
			default: false,
		},
	},
	supports: {
		html: false,
		align: false,
	},
	edit,
	save: () => null, // to use view.php
};

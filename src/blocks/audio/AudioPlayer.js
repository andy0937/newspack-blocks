import classnames from 'classnames';

import { AUDIO_PLAYER_CLASSNAMES } from './consts';

const Slider = ( { className } ) => (
	<div
		className={ classnames(
			AUDIO_PLAYER_CLASSNAMES.SLIDER_BAR_WRAPPER,
			AUDIO_PLAYER_CLASSNAMES.RELATIVE
		) }
	>
		<input type="range" className={ classnames( AUDIO_PLAYER_CLASSNAMES.SLIDER_BAR, className ) } />
		<div className={ AUDIO_PLAYER_CLASSNAMES.SLIDER_INDICATOR } />
	</div>
);

const Modal = ( { children, className, renderTrigger } ) => (
	<button
		className={ classnames(
			className,
			AUDIO_PLAYER_CLASSNAMES.RELATIVE,
			AUDIO_PLAYER_CLASSNAMES.MODAL_TRIGGER
		) }
	>
		<span>{ renderTrigger() }</span>
		<div className={ AUDIO_PLAYER_CLASSNAMES.MODAL }>{ children }</div>
	</button>
);

const Icon = ( { name, className } ) => (
	<i className={ classnames( 'material-icons', className ) }>{ name }</i>
);

const ModalButton = ( { icon, children } ) => (
	<div className={ AUDIO_PLAYER_CLASSNAMES.MODAL_BUTTON } tabIndex="0">
		<Icon name={ icon }></Icon>
		<span>{ children }</span>
	</div>
);

const AudioPlayer = ( { attributes } ) => {
	if ( ! attributes.source && ! attributes.rssFeedUrl ) {
		return 'Please add an audio source or an RSS Feed URL';
	}
	return (
		<div
			className={ classnames( AUDIO_PLAYER_CLASSNAMES.BASE, AUDIO_PLAYER_CLASSNAMES.IS_LOADING ) }
			data-rss-feed-url={ attributes.rssFeedUrl }
		>
			<button className={ AUDIO_PLAYER_CLASSNAMES.PLAY_BUTTON }>
				<Icon name="play_arrow" className={ AUDIO_PLAYER_CLASSNAMES.PLAY_ICON } />
			</button>

			<div
				className={ AUDIO_PLAYER_CLASSNAMES.IMAGE }
				style={ {
					backgroundImage: `url('${ attributes.imageUrl }')`,
				} }
			/>

			<div className={ AUDIO_PLAYER_CLASSNAMES.TEXT }>
				<div className={ AUDIO_PLAYER_CLASSNAMES.TITLE }>{ attributes.title || '' }</div>
				<div className={ AUDIO_PLAYER_CLASSNAMES.DESCRIPTION }>
					{ attributes.description || '' }
				</div>
			</div>

			<Modal
				className={ AUDIO_PLAYER_CLASSNAMES.OPTIONS_BUTTON }
				renderTrigger={ () => <Icon name="more_vert" /> }
			>
				<ModalButton icon="link">Copy Link</ModalButton>
				<ModalButton icon="library_music">Subscribe</ModalButton>
			</Modal>

			<div className={ AUDIO_PLAYER_CLASSNAMES.SLIDER }>
				<div className={ AUDIO_PLAYER_CLASSNAMES.SLIDER_CURRENT }>0:00</div>
				<Slider className={ AUDIO_PLAYER_CLASSNAMES.TIME_SLIDER } />
				<div className={ AUDIO_PLAYER_CLASSNAMES.SLIDER_DURATION }>-</div>
			</div>

			<Modal
				className={ AUDIO_PLAYER_CLASSNAMES.VOLUME_BUTTON }
				renderTrigger={ () => <Icon name="volume_up" /> }
			>
				<Slider className={ AUDIO_PLAYER_CLASSNAMES.VOLUME_SLIDER } />
			</Modal>

			<button className={ AUDIO_PLAYER_CLASSNAMES.CLOSE }>
				<Icon name="close" />
			</button>
			<audio src={ attributes.source || '' } />
		</div>
	);
};

export default AudioPlayer;

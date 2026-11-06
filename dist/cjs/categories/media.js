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
var media_exports = {};
__export(media_exports, {
  Airplay: () => import_airplay.Airplay,
  Aperture: () => import_aperture.Aperture,
  AudioLines: () => import_audio_lines.AudioLines,
  AudioLinesOff: () => import_audio_lines_off.AudioLinesOff,
  AudioLinesX: () => import_audio_lines_x.AudioLinesX,
  AudioWaveform: () => import_audio_waveform.AudioWaveform,
  BookAudio: () => import_book_audio.BookAudio,
  Camera: () => import_camera.Camera,
  CameraOff: () => import_camera_off.CameraOff,
  Captions: () => import_captions.Captions,
  CaptionsOff: () => import_captions_off.CaptionsOff,
  Cast: () => import_cast.Cast,
  Clapperboard: () => import_clapperboard.Clapperboard,
  Disc: () => import_disc.Disc,
  Disc2: () => import_disc_2.Disc2,
  Disc3: () => import_disc_3.Disc3,
  DiscAlbum: () => import_disc_album.DiscAlbum,
  FastForward: () => import_fast_forward.FastForward,
  Film: () => import_film.Film,
  Headphones: () => import_headphones.Headphones,
  ImageIcon: () => import_image.ImageIcon,
  ImageOff: () => import_image_off.ImageOff,
  ImagePlay: () => import_image_play.ImagePlay,
  ImagePlus: () => import_image_plus.ImagePlus,
  ImageUp: () => import_image_up.ImageUp,
  Images: () => import_images.Images,
  Mic: () => import_mic.Mic,
  MicAudioLines: () => import_mic_audio_lines.MicAudioLines,
  MicOff: () => import_mic_off.MicOff,
  MicSignal: () => import_mic_signal.MicSignal,
  MicVocal: () => import_mic_vocal.MicVocal,
  Newspaper: () => import_newspaper.Newspaper,
  Pause: () => import_pause.Pause,
  Play: () => import_play.Play,
  PlayOff: () => import_play_off.PlayOff,
  Projector: () => import_projector.Projector,
  Radio: () => import_radio.Radio,
  RadioOff: () => import_radio_off.RadioOff,
  Rewind: () => import_rewind.Rewind,
  Rss: () => import_rss.Rss,
  SkipBack: () => import_skip_back.SkipBack,
  Speaker: () => import_speaker.Speaker,
  Tv: () => import_tv.Tv,
  TvMinimal: () => import_tv_minimal.TvMinimal,
  TvMinimalPlay: () => import_tv_minimal_play.TvMinimalPlay,
  Video: () => import_video.Video,
  VideoOff: () => import_video_off.VideoOff,
  Volume: () => import_volume.Volume,
  VolumeOff: () => import_volume_off.VolumeOff,
  Webcam: () => import_webcam.Webcam,
  WebcamOff: () => import_webcam_off.WebcamOff
});
module.exports = __toCommonJS(media_exports);
var import_airplay = require("../icons/airplay.js");
var import_aperture = require("../icons/aperture.js");
var import_audio_lines = require("../icons/audio-lines.js");
var import_audio_lines_off = require("../icons/audio-lines-off.js");
var import_audio_lines_x = require("../icons/audio-lines-x.js");
var import_audio_waveform = require("../icons/audio-waveform.js");
var import_book_audio = require("../icons/book-audio.js");
var import_camera = require("../icons/camera.js");
var import_camera_off = require("../icons/camera-off.js");
var import_captions = require("../icons/captions.js");
var import_captions_off = require("../icons/captions-off.js");
var import_cast = require("../icons/cast.js");
var import_clapperboard = require("../icons/clapperboard.js");
var import_disc = require("../icons/disc.js");
var import_disc_2 = require("../icons/disc-2.js");
var import_disc_3 = require("../icons/disc-3.js");
var import_disc_album = require("../icons/disc-album.js");
var import_fast_forward = require("../icons/fast-forward.js");
var import_film = require("../icons/film.js");
var import_headphones = require("../icons/headphones.js");
var import_image = require("../icons/image.js");
var import_image_off = require("../icons/image-off.js");
var import_image_play = require("../icons/image-play.js");
var import_image_plus = require("../icons/image-plus.js");
var import_image_up = require("../icons/image-up.js");
var import_images = require("../icons/images.js");
var import_mic = require("../icons/mic.js");
var import_mic_audio_lines = require("../icons/mic-audio-lines.js");
var import_mic_off = require("../icons/mic-off.js");
var import_mic_signal = require("../icons/mic-signal.js");
var import_mic_vocal = require("../icons/mic-vocal.js");
var import_newspaper = require("../icons/newspaper.js");
var import_pause = require("../icons/pause.js");
var import_play = require("../icons/play.js");
var import_play_off = require("../icons/play-off.js");
var import_projector = require("../icons/projector.js");
var import_radio = require("../icons/radio.js");
var import_radio_off = require("../icons/radio-off.js");
var import_rewind = require("../icons/rewind.js");
var import_rss = require("../icons/rss.js");
var import_skip_back = require("../icons/skip-back.js");
var import_speaker = require("../icons/speaker.js");
var import_tv = require("../icons/tv.js");
var import_tv_minimal = require("../icons/tv-minimal.js");
var import_tv_minimal_play = require("../icons/tv-minimal-play.js");
var import_video = require("../icons/video.js");
var import_video_off = require("../icons/video-off.js");
var import_volume = require("../icons/volume.js");
var import_volume_off = require("../icons/volume-off.js");
var import_webcam = require("../icons/webcam.js");
var import_webcam_off = require("../icons/webcam-off.js");

class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>
  container: HTMLElement

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this.initPlayer()
    this.initPlugins()

  }

  initPlayer() {
    this.container = document.createElement('div')
    this.container.style.position = 'relative'

    this.media.parentNode.insertBefore(this.container, this.media)

    this.container.appendChild(this.media)
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  toggle_play() {
    if (this.media.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }

  toggle_mute() {
    this.media.muted = !this.media.muted
  }
  
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
}

export default MediaPlayer
'use client'

import { useState, useRef, useCallback } from 'react'

interface Video {
  slug: string
  title: string
  category: string
}

interface Props {
  videos: Video[]
  categories: Record<string, string>
  videoBase: string
}

export default function VideoGallery({ videos, categories, videoBase }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [loadingVideo, setLoadingVideo] = useState<string | null>(null)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  const filtered = activeCategory === 'all'
    ? videos
    : videos.filter(v => v.category === activeCategory)

  const stopVideo = useCallback((slug: string) => {
    const video = videoRefs.current[slug]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [])

  const handlePlay = (slug: string) => {
    // Same video — toggle pause/play
    if (playingVideo === slug) {
      const video = videoRefs.current[slug]
      if (video) {
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
      }
      return
    }

    // Stop previous video
    if (playingVideo) {
      stopVideo(playingVideo)
      setPlayingVideo(null)
    }

    const video = videoRefs.current[slug]
    if (video) {
      setLoadingVideo(slug)
      video.preload = 'auto'
      video.play()
        .then(() => {
          setPlayingVideo(slug)
          setLoadingVideo(null)
        })
        .catch(() => {
          setLoadingVideo(null)
        })
    }
  }

  const handleEnded = (slug: string) => {
    stopVideo(slug)
    setPlayingVideo(null)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 text-sm tracking-wide transition-all cursor-pointer ${
                activeCategory === key
                  ? 'bg-brand text-white'
                  : 'bg-bg-warm text-text-muted hover:text-text-body hover:bg-bg-light border border-border-light'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Video grid — 1 col mobile, 3 col tablet, 4-5 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((video) => {
            const isPlaying = playingVideo === video.slug
            const isLoading = loadingVideo === video.slug

            return (
              <div key={video.slug} className="group">
                <div
                  className={`relative aspect-[9/16] bg-black overflow-hidden cursor-pointer ${
                    isPlaying ? 'sticky top-[72px] z-30 sm:static' : ''
                  }`}
                  onClick={() => {
                    if (!isPlaying) handlePlay(video.slug)
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[video.slug] = el }}
                    src={`${videoBase}/${video.slug}.mp4`}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    controls={isPlaying}
                    onEnded={() => handleEnded(video.slug)}
                    onCanPlay={() => {
                      if (loadingVideo === video.slug) {
                        setLoadingVideo(null)
                      }
                    }}
                  />

                  {/* Loading spinner */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Play overlay */}
                  {!isPlaying && !isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                          <path d="M0 0L20 12L0 24V0Z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-text-body leading-snug">{video.title}</p>
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">
            В этой категории пока нет видео
          </p>
        )}
      </div>
    </section>
  )
}

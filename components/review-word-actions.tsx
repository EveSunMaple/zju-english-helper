'use client'

import { Button, Flex } from '@radix-ui/themes'
import { Star, Plus } from 'lucide-react'
import type { GameEngine } from '@/lib/engine'
import type { WordEntry } from '@/lib/model'
import type { ReviewItem, WordOrigin } from '@/lib/review'

export function ReviewWordActions({ engine, word, item, origins = [] }: {
  engine: GameEngine; word: WordEntry; item?: ReviewItem; origins?: WordOrigin[]
}) {
  const favorite = item?.favoriteAt != null
  return <Flex gap="2" wrap="wrap">
    <Button size="2" variant="soft" color={favorite ? 'amber' : 'gray'}
      aria-label={`${favorite ? '取消收藏' : '收藏'} ${word.english}`} aria-pressed={favorite}
      onClick={() => engine.toggleFavorite(word, origins)}>
      <Star size={14} fill={favorite ? 'currentColor' : 'none'} />{favorite ? '已收藏' : '收藏'}
    </Button>
    {!item?.schedule && <Button size="2" variant="soft" onClick={() => engine.addToReview(word, origins)}>
      <Plus size={14} />加入复习
    </Button>}
  </Flex>
}

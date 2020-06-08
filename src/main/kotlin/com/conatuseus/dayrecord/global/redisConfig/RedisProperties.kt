package com.conatuseus.dayrecord.global.redisConfig

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class RedisProperties(@Value("\${spring.redis.host}")
                      val host: String,
                      @Value("\${spring.redis.port}")
                      val port: Int)
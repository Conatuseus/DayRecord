package com.conatuseus.dayrecord.global.redisConfig

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RedisPropertiesTest(@Autowired
                          val redisProperties: RedisProperties) {

    @Test
    @DisplayName("Redis Property 잘 가져오는지 확인")
    fun checkRedisProperties() {
        assertEquals(redisProperties.port, 6379)
        assertEquals(redisProperties.host, "localhost")
    }
}
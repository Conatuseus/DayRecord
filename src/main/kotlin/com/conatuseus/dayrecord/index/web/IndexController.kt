package com.conatuseus.dayrecord.index.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class IndexController {

    @GetMapping("/")
    fun indexPage(): String {
        return "index";
    }
}
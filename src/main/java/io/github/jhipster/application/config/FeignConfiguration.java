package io.github.jhipster.application.config;

import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(basePackages = "io.github.jhipster.application")
public class FeignConfiguration {

}

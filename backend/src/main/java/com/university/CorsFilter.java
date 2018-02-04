package com.university;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        String origin = request.getHeader("origin");
        if (allowedAccess(origin)) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",
                "content-type, accept, cache-control, x-requested-with, authorization, x-http-method-override, set-cookie, cookie, x-admin-resources, x-admin-client");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        if (request.getRequestURI().contains("/resources") && request.getHeader("x-admin-resources") == null && request.getHeader("x-admin-client") == null && !request.getRequestURI().contains("/resources/temporary")) {
            response.setHeader("Cache-control", "private, max-age=200");
        } else {
            if (request.getHeader("x-admin-resources") != null || request.getHeader("x-admin-client") != null) {
                response.setHeader("Cache-control", "no-store, max-age=0, must-revalidate");
            } else {
                response.setHeader("Cache-control", "no-cache, max-age=0, must-revalidate");
            }
            response.setHeader("Expires", "0");
            response.setHeader("Pragma", "no-cache");
        }

        if (!request.getMethod().equals("OPTIONS")) {
            chain.doFilter(req, res);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void destroy() {
    }

    private boolean allowedAccess(String ref) {
        Map<String, Boolean> accessMap = new HashMap<String, Boolean>();
        accessMap.put("http://localhost:3000", true);
        accessMap.put("http://localhost:3333", true);
        accessMap.put("http://localhost:8000", true);
        accessMap.put("http://localhost:8080", true);
        accessMap.put("http://localhost:4200", true);
        accessMap.put("http://localhost:4201", true);
        accessMap.put("http://localhost:4202", true);
        accessMap.put("http://192.168.137.1:4200", true);
        accessMap.put("http://192.168.8.250:3000", true);
        accessMap.put("http://192.168.8.250:3333", true);
        accessMap.put("http://192.168.8.250:8080", true);
        accessMap.put("http://192.168.0.104:8080", true);
        accessMap.put("http://192.168.0.104:3000", true);
        accessMap.put("http://10.150.20.179:8080", true);
        accessMap.put("http://10.150.20.195:4202", true);
        accessMap.put("http://BGWCMDC008.ucb.lan:4202", true);
        if (accessMap.containsKey(ref)) {
            return accessMap.get(ref);
        } else {
            return false;
        }

    }
}
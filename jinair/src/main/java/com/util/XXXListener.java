package com.util;

import javax.servlet.AsyncEvent;
import javax.servlet.AsyncListener;
import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionActivationListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionIdListener;
import javax.servlet.http.HttpSessionListener;

//@WebListener
public class XXXListener implements ServletContextListener, ServletContextAttributeListener, HttpSessionListener, HttpSessionAttributeListener, HttpSessionActivationListener, HttpSessionBindingListener, HttpSessionIdListener, ServletRequestListener, ServletRequestAttributeListener, AsyncListener {


    public XXXListener() {}
    public void sessionCreated(HttpSessionEvent arg0)  { }
    public void attributeRemoved(ServletContextAttributeEvent event)  {     }
    public void onError(AsyncEvent arg0) throws java.io.IOException {     }
    public void sessionIdChanged(HttpSessionEvent event, String oldSessionId)  { }
    public void attributeAdded(ServletRequestAttributeEvent srae)  {     }

    public void onTimeout(AsyncEvent event) throws java.io.IOException { }
    public void attributeReplaced(HttpSessionBindingEvent event)  { }
    public void sessionWillPassivate(HttpSessionEvent se)  {    }
    public void contextInitialized(ServletContextEvent sce) { }
    public void attributeAdded(ServletContextAttributeEvent event)  {     }
    public void onComplete(AsyncEvent event) throws java.io.IOException {     }
    public void requestDestroyed(ServletRequestEvent sre)  {     }
    public void attributeRemoved(ServletRequestAttributeEvent srae)  {     }
    public void onStartAsync(AsyncEvent event) throws java.io.IOException {     }
    public void valueBound(HttpSessionBindingEvent event)  {     }
    public void requestInitialized(ServletRequestEvent sre)  {     }
    public void sessionDestroyed(HttpSessionEvent se)  {     }
    public void sessionDidActivate(HttpSessionEvent se)  {     }
    public void contextDestroyed(ServletContextEvent sce)  {     }
    public void attributeReplaced(ServletRequestAttributeEvent srae)  {     }
    public void attributeAdded(HttpSessionBindingEvent event)  {     }
    public void attributeRemoved(HttpSessionBindingEvent event)  {     }
    public void attributeReplaced(ServletContextAttributeEvent event)  {     }
    public void valueUnbound(HttpSessionBindingEvent event)  {     }
	
}

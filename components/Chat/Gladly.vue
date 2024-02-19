<template>
    <div></div>
</template>

<script setup>

const props = defineProps({
    gateway: String
});

onMounted(() => {        
    const scriptChatBot = document.getElementById('scriptChatBot');  
    if (!scriptChatBot) {

        var gladlyScript = '!function(c,n,r,t){if(!c[r]){var i,d,p=[];d="PROD"!==t&&t?"STAGING"===t?"https://cdn.gladly.qa/gladly/chat-sdk/widget.js":t:"https://cdn.gladly.com/chat-sdk/widget.js",c[r]={init:function(){i=arguments;var e={then:function(t){return p.push({type:"t",next:t}),e},catch:function(t){return p.push({type:"c",next:t}),e}};return e}},c.onHelpAppHostReady=function(t){if(delete c.onHelpAppHostReady,(c[r]=t).loaderCdn=d,i)for(var e=t.init.apply(t,i),n=0;n<p.length;n++){var a=p[n];e="t"===a.type?e.then(a.next):e.catch(a.next)}},function(){try{var t=n.getElementsByTagName("script")[0],e=n.createElement("script");e.async=!0,e.src=d+"?q="+(new Date).getTime(),t.parentNode.insertBefore(e,t)}catch(t){}}()}}(window,document,"Gladly","PROD")';

        var gladlyScriptTag = document.createElement('script');
        gladlyScriptTag.id = "scriptChatBot";
        gladlyScriptTag.type = 'text/javascript';
        gladlyScriptTag.text = gladlyScript;
        document.head.appendChild(gladlyScriptTag);

        const gladlyScriptConfig = 'window.gladlyConfig = { appId: "aeropost.com-' + props.gateway + '" };';
        const gladlyScriptConfigTag = document.createElement('script'); 
        gladlyScriptConfigTag.id = "scriptChatBotConfig";               
        gladlyScriptConfigTag.type = 'text/javascript';
        gladlyScriptConfigTag.text = gladlyScriptConfig;
        document.body.appendChild(gladlyScriptConfigTag);

        const styles = `
                    #gladlyChat_container .initialChatButton, 
                    #gladlyChat_container .minimizedChatButtonSelector, 
                    #gladlyChat_container .onboarding_selector, 
                    #gladlyChat_container .proactiveGreeting, 
                    #gladlyChat_container .ongoingChat_selector,
                    #gladlyChat_container .onboarding_submitButton_selector {
                        background: #8dc7e8 !important;
                    }

                    #gladlyChat_container .chatIcon_customFillColors {
                        fill: #003593 !important;
                    }
                `;
        
        const styleElement = document.createElement('style');
        styleElement.type='text/css';
        styleElement.textContent = styles;
        setTimeout(() => {
            document.head.appendChild(styleElement);                    
        }, 2000);

    }
})

</script>

<style scoped>

</style>
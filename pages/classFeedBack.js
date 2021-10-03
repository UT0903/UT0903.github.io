//onclick="(function(svg){var src=window.event.target||window.event.srcElement;while (src!=null&&src.nodeName.toLowerCase()!='a'){src=src.parentNode;}if(src==null){if(svg.wnd!=null&&!svg.wnd.closed){svg.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==svg.wnd){svg.wnd.postMessage(decodeURIComponent(svg.getAttribute('content')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);}}})(this);"
import Container from "@material-ui/core/Container";
export default function classFeedBack() {
  return (
    <Container maxWidth="lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1693px"
        viewBox="-0.5 -0.5 1693 2474"
        content='<mxfile host="app.diagrams.net" modified="2021-02-20T14:12:10.015Z" agent="5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36" etag="vRYsQwOpfuMP-qFEIFB4" version="14.1.8" type="device"><diagram id="n6EbjCFRRSFaFoshQ-36" name="第1頁">7V1Zk6LI2v41RvRcVAX7conbzET09k31OeebK4PSLGUaoQZxuuv8+pNvksmaaKKgiFVV0a2AqJnPu28jdbL9+Wvkvm4+hSvkjxRp9XOkTkeKohqahv+DI2/JEUVV6JF15K2SY3J24Mn7L6IHJXp0763QrnBhHIZ+7L0WDy7DIEDLuHDMjaLwR/Gyl9Avvuuru0aVA09L168e/Y+3ijfJUUsxs+O/IW+9Ye8sG3ZyZuuyi+k32W3cVfgjd0idjdRJFIZx8mj7c4J8WD22Lsnr5jVn0w8WoSAWecF+OftsPOx+/v3FezC//evb94///fVBlq3kPv+4/p5+Zfpx4ze2Buso3L9W345+gn9QFKOfvM1wn9kdsu+LkYLCLYqjN3wdfdWDZdI1oigxNfr8R7bkJlvHTX65LZ1uNd3mdXrzbCXwA7oYjRbG5CyM4eM3Hr+EeAnyK2T8vQ/ZiYcdwbCDL1Cl15/ZSfxoTf8nd3kuH6C3XYZ+GBVuO1LUlxcV/3BuNjNGjj2y56OZPrLtkWPBA2c6GuMH5mg8H9kKeaCOxmM4ZVkj22TviFcmedPSJ4vaOYJvX/mSlbcsYQ1DLVgh2BkZn/6x8WL09Oou4ewPzGLwsU289enpXRyF31O61PGRlbvbpK9+8Xx/kq6mOpnM53iJ1PE6clcehnHu3Bz/GEZ6y9wZbQq/6UfNE8ARiirTRRX/XcD7XzsUfXn+C3ihIvnuM/JPA6+iiYEXg8sxR7acw50FMLQIAJ1ZEW4VPHBRU0WI7wXf2fdQn5awe96Lt1xMwu3rPvaCdXLZQZLW8lyI8oCTkceYuYSfkFUeu8vva3IPBp4gDFAFpLJEl3rubj0f+N2/UbRyA5cephLQwk9d31sH+PESf1kUVfGM5JWOTB5mbXs+x9yiE8zSs0qRY1tVhq1IHESz6xoAGj/NYfo6GDdGtk6grY3G05E1JRh3RvZsNCPMF7NXfAQzF3wZRr0tjSyDsGZjZCnk4vHINqqY/zB9+vpL2+Txe4DxsNovYy8MFnG4mHprL3b9xdMrQsvN4msULtFuJ0gz+r3QjKpS6dAhzRh3RjTHNJMPnz62jv5P7nLjBWjxEblRIAZyWR4Yyl9eXpTlko9ywHmnKNela6JcULtX7B6aPQrH7NFszlJpRmdmj8KzB88zexpaNHXmUY4ZZPKYcRT8pbGUxWLYMpn+6eQkMRPAtZZQWyZP3450boIVDK5646lqqZVYlm2DecY3zmY6PSfKtFLqbmSCtUZqF5e0mBZmYGqBwWUT9ZTA2yKAt7HOqhDNlRBFy+J24vrLvb/fiYhZdWBS1loivpQF64vYX68o8jBaUATfBJSR5AN3gGPmcS1KFHvYGqY47g8yxK5xb94P7m27kd/hbICnfoiBIhzrKxjJDmg8+Bs4JsHzeOSomQ7UMrA/YuPJjRaOv0bPkSsA72QP7wPeDd1qZ8Nb1YcN79RFYI6sGejuLYP5axQ+u8+e78VvAkhWjXtBcmMHcXMkl51dQ4cyxjHmywrly3kGnRmp7YJ76u2WEVYuF5/ceIO2buwtRdQRTRkWylsMg5yAct28J4XbAh7tOETPHpNgR8rBScQPvC86hEiAEPCDycia52IliWNG4sRBnH0cYgS7rbuD52G0df3FRzdY79012i3cYLVg77b4tkFhJCIatLsRDY3jIOcTzYWVeDFPqEW/Vm6X0WqNnujTMIo34ToMXH+WHR1nOICtyq75GIavdPf/QnH8RnfKxTgsYgP99OL/h5c/6vTZn7kz05/0zuTJG3sS4CXIvQie/pk/l72MPMtex/Kt5FOcErtwHy3RoSvV5MLYjdbo4C0pHGB9RfDzYNol3UJtDgwxFLA3uhYKlJNgoPQLB6YgDtgd+4gD+bo4MO8JB4kd1k8cKO/84FwcaIogDrT+4kCWr6we9IIhyII7zqBxXBNorAqUY+gdbrlyZV2gBxqh6IYzDn7bG66yVI9rJomoTI0+kCRimvSaQuTa7G5hJM7CHM5qv1TWSOYigKAgifwVHBEW+OKyDOXUa2HANbaW5SzDEZXmc95dzgivKqDokSmRwVVyRubzyaQ+ob9hzohaR7KH0/bborwruPJotpQBiVF4GQHnOiRMgU/PJIQjQB28lGandS/eFJx1T3G0X8b7iDnx/HUYefFmKxSDt3JbOWj/XeMYfAPgM/+dVRJJAw/CV+pZ8nHLozKm4+z+pAIGRZDXj/ngdiuW86zK90MQDaNA5xPEwKNAqUJEJMZYFiGDDx0Uujy97WK03TVFvvKO/M6QP/Qo/wEz4YBxkWYlGhAGtaUPzrR9HSnVhxZTtMOQSZSkwPXfdp6IiqRq73TRGl1o96UhkWxbjHpF+voWb8IAPyCol0nuog70kSTlYqJxhOQFz6Cfk4utXFYkS2pPUgzGSu7OycV2BxllTNYsXsJoMd7vvADtdlkl8sILFmwVjhKdNjQ17AUZLaWcnU10g9fCMLqxGZJkBI8NQkwS5FHOiBlv19HZsVycL1/aV9WSlVl8icBNg1Z5lS3NzRGRUUPLNa4t1LwAuejqXdGLTgr1SVWgoxEyOZmCipZNF/QyxyB0t3jLXX9xgHYESEYeXNlVe8XN59PM8BW7MaGAGYG8cxWPF2hWno8iatcIYF4fmInfYteKs7WqC1v4gmk5tKncHYfmD2/38Yg9a653NGJPGwQcDdhHyHdj75/8RXww0Jd+DT3CvBinNYtJwppcwlPyleirSpBKP8YZmV7GdSHV40wvYVAxrBzP+FPaBtV5WX76Vfc+t/EZazmy9XJh3zPe0vud1/q18+o1d14+Zeelfu28sCBRRbO9zxQkhnKaIDl+I7t0o+QrdyaRZPb+71rOyeAUT0RVe8WXZMYne9WwyjY4toDGsQW6TNJUOQvTu4ZVJriXaHxiTLKtdHA+WVPSuYr0MbEm9KwjFg7pxZGb6S91KFdwMpnphd5TUy9CJMEGn8c8Be4pzou0GnI7mEfYGtVcw0OUINsirqI5CXJPWDOeMc0svLTP6D/oubGfdHChuPb8pOKY5rcHHnhooZpLq0OkweHkSj1Qbm/Pnv7vI80MGUufQ3jWQdLss7uD/hCBu0YQTVgkKVNC5DAwH2qfyKGXBe8yK9q5popZbh6r81aKJyvlsjHWooap12qYFTq9jMr56fenokrJsmq6LVTpb2HIoYkOPKUuADv4gJIozAmMGuA3V/ZOAXAPlL0c+NJeuzTrkZsmXLw4MX7wfRwDOihBUr354bPTQQXJZxT/CKPvC2eF9UEPI8glCfSQI5nIxNIZARGpDExC1kcZm9eUiNMFX0KafRSQUlUe3ltYQLjimy7VrUV+ZOnKkeSbqusX7uTQftD4vCiP9b7J4pssWsuvi5LyNUr5edPcLu0+l0vGDW/MnSFf2H2u1Bo313KfZ+4UnWiZOjFoFDJkKVUlk8x/4mlxNNIYGauP0si2aKInFGeSEgDb4aitoHeSUU72hBRzkg6dVYVVmXOqonvhd79hT/zMgF++0TYmv00UTbOGOg8aYK0R2cUNsOOg/fDlqf3s/VcEVlGwpraSUDnZ3VTcN0/VFwdt2hb8zvzpBwruy6y8/WRjUk5PHQZCHZXvZsBD83TjxlAvpxjcM9K5ikfrSHeiJWCStFYRQLsuvaO9M8aezj2/S7yXfMtlz3DXvH7x0X0OsaIj1hJclu+mYL55hPRctn9hOhB1Dr53gDy838cTMEXzwlmVUU88hrJ85XKQ2996TbT9M2Ws/dl76crNv3uw98IJ1qIRAU207+uFIgI32c6553usXqpU0CoWZlhKSSnoujCDlRVcNbpglH1EnOT8tDPppaIL/ZsmTSMHxHOKzQ6ILtikUZHKMpdZQwisWuJTYweiCKzDkfv4/dF9JF2/SGl8NtI+N3m0j+2CbyY8AHlbk8mIGx5Ih0QLKyenDYJui0r6ZF4bYElbSjYL/UJ9SUfHLemBRQoO5VHRudAd4PcuE+9ZERWw5xlhumnsOCGFpN2PSVr5GPAUmHoiAaS2KSB1Jz0tMd9aIpJc+HvwAhPoCFV8Q8tNgNGwFnEvKXdEFU3jZydMnHsnCxGycKAKsddkoQ4s1tbi9NLzyWL43aysORRfzdIh6ikVlGb05mt385NN5yNLJbN+p0zN4r68Ldr5FK5QFDDKSeYeMDIKXxafvGAlQDPawLomttkO61wFq5+lXEYfJhdZpQngD1Z1qWTd4KyV0l0xF0tZPrQyl7F7RSFq1O1IdeXZQqeBqqMrrXa40vWNGSq88ULOIPD0KET7MaAMyUpCyzKtSMc6E4SfU9lgwSnofagB33dmuS7TpMjXSmZc41eRfvD4X9vhyQ9SFIwvgzeViDMJ62c6zVnF4gTeQuRjVHtcG6C3OSZV7xzeu59RuofRFhexHiG8FZT+gZ2DR3tHfco8vg2Q9Zau79ATW2+1Ip7zV3DFEsTp45E+LbH4gvwoHSz63AvE1wFBsbP2o6Lb2Z9R4Guq+ajJtqprlmqZkm2YFdpTLQ7p6Z1RHrvzCdy/4Yo1FgqHV1JWpUe8fma2nFXZKquPumxlf5z5W7JiPGIRokJkQDI0XdY7WmmTJ0y6s+mSzHeSFGZNmDqqZ/zpUMv8St/vjJ201yn/lpXKlYusl5pxEQ29din9CUtsXX7EMDVkhtqq9LaVxzzdsEvysDe1R8aBEgrqTLLzelGdK9m18yR7WgbCnHv0gfNBlswH+Zd3QXgWTtMSJuNRs+TcX5VBqzw1sztZd7ql07WsUzTp0dSk7K/YSPnmhN35jdaaTxhLB7zUCbs7lVYtzn/UG9uXNyatumjfIiityFY0kFZjIq2Ud2l1Hk77K60EvE9XklaaoTwq+Z/bFla8XlYXE1YkoWhsvQur0RF/fePQb0pAQxVWvEzCCwkrMK6OCSsSIM6ZVta7aXUuTvsrrHgKfz+ElWGpj6akZn+3Lax4zUm6FlaEqm3jXVh1N5IvJaChCqv67O7dqxucIpvqcFskB64As+2mAmxMBFhDays9lnzFe5Nr4pDur1w7fZRC13LNlvTHvFSSG8s1yeT6HK8j1+o9L63LNRu8KLZDBxXabWRi3bYUq5vD3DhFKiWXoUqxeu3rClJMJYaYgM/QzpthdlMz7M6lWOMG7g+Kwk1cuKIUO72jYedJHiBhjNyPftvmGS/E2JkYg+IsjeSBKbQbSpKmcd/ybKUja6Xx5VnD3iS6eG+S25Rn9a7vq8gzkGhN5NmYyLN3q6wbSPfXKuM5E3oiz1TNeqyuVUOrrPBzTXHGyw7tRpwJ8AeJ/PD4Q3WMWFprb4Kn0ibrAOmQE5IMbYPVVxCUomxjkPIzLFTOJz9VuTrX4bcJq7FqqGog0lO/nPQEhDukeox63knyB9Z0J9rBDr53K+XEoZdKuVJOg2JXebNyWTFXH+Bl3DfZmAxB8kEwHcejLnHxmHBOiABpZPzoMc3qIEMcKuaa14oYtvqo5n8KyoJmP9r2wVoRuSs8/vtt/MfrX38+//xbnvzhrPzPq+n0oX/Dc6HlzphUKhjQkyfJ/cRAHUtFxLIqdsxCLY1fHJWVXZFaL055BLU4CheDOqHSiiw64YrEjeAt7IJJnr1X/mPYbFCBRj8zrfXSIbY6PlhmMQAqq9W5RWntgFeJ9QTN1V0pFfrReL39u6u1MngxDjGzpb1KW7u4MNh+1ivrYvGKkmW7OzfE+WbGBeZypyZFEho2KJlaaZGmlbb+ynUOo1Nbc3RfSU+/QhuwG2rxRdt4cVt8NQxPpQTYqMVXa9Rwhd4u1G2W6zxHLWAixCyzw04uvo/WaDHZeAHaifSKT7rmDqfzxKEiwYZlFw1wy9pcakU2b1WZ/JCatZAae+CkaWhfB0zbRpFrW3BZy0D/FQUocn0MdLSFiaAijYkG1mPlUIFRw3LY5kg37hzoRONIZiJYZPbBxRA/9oT708n3A/jOWXt5DMhlES+o0VvC8+F5SbWQ1cLV+NJzHVpIWqnRmazyOgDyGuToZmemo3V+elzrzhcT0g4c8gB61SiHMhJ62um4b0eubJYlGThiZtnMqOu83JgHWuITwLsgwWu03JTpqFLoGG7mCIcUWIAQt8CxOJ62Lbt/Q64fbxZ/QBN9tFp83bztwMW3mHsxNtNEBtgNzUqrTRZqrLs2gHEqyguSZuCdZk1oSWQRfzd0JVKpgkoHk+Y7orWF9rG7+47iZ9f3HzzY/i1aeRj3Is6IgZloh2DeHbfmw3zoc+sMQDXYXwbReVSm84jhvDZzgKpr8FGi9bP7AS8O/sPfWOI++gUeEj2PfI8XCiF4+TYMwh2Ba+GS7Kvyg8CKTrYX43sDvWZ9ODAjR6MQX5k+YwSjExrDR6bwGD6YDquu4607dq2cXssAedJtlOw2ieKcnoF/YL3xAQoAna05uyb5/uyCZHXwM4dcmoAhfxF5ts49pnd/Lp3AGFB0iNPrmAPSp8D46VMNzlr4H2eaXgzHbCd/U/L1y3fO3jKqO0Nex75v/gKFswApl4MDMrk0x+ngIOF1cJxwu+wyyvHggEQOcLkenCZ8j7wkx/myG+WYHxxk7I+deqJ7MrXIoYQJwnPKBsl1KSNk34sxw+xtS+ct5RmrwqW1oexOBKLpqRSdGU/UgSumV5K5O+w2b7k7aGruxI90VRJUS7lzlF+mJ63cOcw30+Pr3CcoUw95mpJQ/mCRsOl1FQ5Qk2p0htxGay8IyAzxH952ix+IiGxDvReZrZJmGJeU2elEm4HKbNKZ3U6qfScd2F1/hmtXCMMDmxPbYi3G2RhOHXu98pRyGzpwPaXduTwf7IrPk9OqXpZ5Wf52d05PQ8CJjEH+Cg+JfRe4/lMcRi6MEDxGHc8pLXzZx5hWWRrUYQ9Zai3xKKacLv2CfzkuMkpzK1h8VSfphrDsqtFklKrZuIzDKm4xp8G+ySOG9GCfPWokCJZl/Sm5sJhBkuvGBR9bMiF81tFsp9/cYPUQBovZz1cUpfM35h7yV4uP3gta/C4iCYYWMqttldLYz9Yc+lopG0LhzDwYkjajk9k1JOcM3Mkqb5oNAf84ccvNaNwYvySZK+A4uQkBbdHFHwjzQazTf3O9H26wWyQDa7zdFtMGGQUoQhbS0MiirvfCBchCL+VO8EaBDIksksRtKSccEsinMzVaz4KbR2i32brB4glhK9aNBBA+MAPgqnxfVu4L4Pk0ZIlNH5sTF7RByg+UXOIny5BrOzvID59df/Fpv/OWi8nej/eRSMBFHxrsr8jX5ZLhq3N0/SHBnpf9SafvJYSQSwPtKBfu6+5tuRFNh5OVd7C3BnalVOmjcUbZDwnsJtSyJbVm4ylo6cDaSYU7GL8qKPwzFegAHqTjKEmW/9jJxoC1ne4feVu0mEb7dTJ48rc91nq82EMiKSXKHSn1DYPtJ9i6+lXpQTSfkVfxJeb1bLhQ4s7Qa7o6udPBzlmPdIFvdD0E8IGClRNFhNiXvrvD+maJFVTpWxhN9N3Qao0OEl1ujXTOCrFjEeTbef+gwj7wVo2+w1eosM3RNOtFQGnaLNPqLtxHS0Rfla390RuV7xO70RrFlfuQPUy/9TnbKjCB6X62teSRT72UTXfVPHajzrf1eGuAg40q6lLRLX67nzYaWlR7wM6FGp5DPMEgg1kTJ9KEqFQTomQRG/twvc0AqvZP6o2RyjdxI1YvdoLkJCDol+06ZrXdC7p2URoHcK2So8usLhaXkaVh3g5Wq4ftQspNlHKEztxi/Lp/HWwtML0s8kCDf6lXITlFuonR2c49rHPpb10Jp35kojrjKSegPrZnktOk/1hKsM3qStoilCu4f8czUk6SL+4vjIxr3/0VbV2RuJ0ytLIRVtzfARaZY6so/xRORs6Q/FpHwdt6PFocvAMLTlwCvKXA22VLPkRVlLadLu0pdLIsHdfobJ5p2mEN8vm9zVvX6HQoqwGNLtHNbKnQ6wac30ZfdbK+HbmGjpjXBOu1Rk5LqLra45kBv01YW3PDtMNuAJeWusXbtt90mZNi2XKj5YJEf4r3K7zfiycU/eMt0WK22i9d0cyygQn5F5Z+XNfduYVK0Ma0U8rDHHbB8yWIq9S6ra/Epd18VlvDFuktlGw1Jy6taDAOu8z6QqLLvgHqkg3l1snrXNnVvJrsXPLqZUWkYCuBs/NLSRo1mF2ViRpAWjqhqFwPKGx7WVMmr8Yk5mZBrhIQG2mJMJtDSC0hyPINTUhXgvcywAd0uFynxRpkx/cfvuzjxRS9oGDXjCD1gVUip6VsVxFrRT9oT6s468cbC0XAT4hsazWR7TQuTbpLOQcTvO82HH12Wh2vlEDmwbC7eLR5+fEgdZhLkyLeMdci5oxSfRavEWVbmLt4vMcG16yTb6ufJitXandb1rU/oZW39AJEMpWhIldApKsDE+mHcpQha79TYKvl7iLadWU6d9wNLzjUjBZMoWjHconp/HCaW8ZmIX4h52ZJpPlpaaPVygCcYbPiGuhxGmXUovFBJSOI7ezHKKDzQeaYemmOZR6e5bxLMXiSJku5hMysvZI6+x8=</diagram></mxfile>'
        style={{ cursor: "pointer", maxWidth: "100%", maxHeight: "2474px" }}
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ccff99-1-ffff66-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#CCFF99" }} />
            <stop offset="100%" style={{ stopColor: "#FFFF66" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-99ccff-1-e5ccff-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#99CCFF" }} />
            <stop offset="100%" style={{ stopColor: "#E5CCFF" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffcc99-1-ffccff-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFCC99" }} />
            <stop offset="100%" style={{ stopColor: "#FFCCFF" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffcc99-1-cce5ff-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFCC99" }} />
            <stop offset="100%" style={{ stopColor: "#CCE5FF" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
            id="mx-gradient-ffff66-1-ffcc99-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFCC99" }} />
            <stop offset="100%" style={{ stopColor: "#FFFF66" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-e6e6e6-1-b3b3b3-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#E6E6E6" }} />
            <stop offset="100%" style={{ stopColor: "#B3B3B3" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffffcc-1-99ccff-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFFFCC" }} />
            <stop offset="100%" style={{ stopColor: "#99CCFF" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffccff-1-99ff99-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFCCFF" }} />
            <stop offset="100%" style={{ stopColor: "#99FF99" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffffff-1-ffffff-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#ffffff" }} />
            <stop offset="100%" style={{ stopColor: "#ffffff" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffe6cc-1-ff9933-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFE6CC" }} />
            <stop offset="100%" style={{ stopColor: "#FF9933" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-b9e0a5-1-c3abd0-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#B9E0A5" }} />
            <stop offset="100%" style={{ stopColor: "#C3ABD0" }} />
          </linearGradient>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="mx-gradient-ffcccc-1-e6e6e6-1-s-0"
          >
            <stop offset="0%" style={{ stopColor: "#FFCCCC" }} />
            <stop offset="100%" style={{ stopColor: "#E6E6E6" }} />
          </linearGradient>
        </defs>
        <g>
          <rect
            x={80}
            y={922}
            width={720}
            height={185}
            rx="27.75"
            ry="27.75"
            fill="url(#mx-gradient-ccff99-1-ffff66-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "718px",
                    height: "1px",
                    paddingTop: "1015px",
                    marginLeft: "81px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }}>
                        <b>
                          <font color="#ff3333">機器學習系列</font>
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={440}
                y={1018}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                機器學習系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Scientific_Computing">
            <rect
              x={100}
              y={1002}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1042px",
                      marginLeft: "101px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>科學計算</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={200}
                  y={1044}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  科學計算
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Introduction_to_Digital_Speech_Processing">
            <rect
              x={340}
              y={1002}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1042px",
                      marginLeft: "341px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            數位語音處理概論
                            <br />
                            (DSP)
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={440}
                  y={1044}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  數位語音處理概論(DSP)...
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Machine_Learning">
            <rect
              x={580}
              y={1002}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1042px",
                      marginLeft: "581px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>機器學習(ML)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={680}
                  y={1044}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  機器學習(ML)
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={80}
            y={422}
            width={490}
            height={465}
            rx="69.75"
            ry="69.75"
            fill="url(#mx-gradient-99ccff-1-e5ccff-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "488px",
                    height: "1px",
                    paddingTop: "655px",
                    marginLeft: "81px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          <br />
                          數學/資訊理論系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={325}
                y={658}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                數學/資訊理論系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Calculus">
            <rect
              x={110}
              y={512}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "552px",
                      marginLeft: "111px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>微積分甲上</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={210}
                  y={554}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  微積分甲上
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Calculus">
            <rect
              x={110}
              y={642}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "682px",
                      marginLeft: "111px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>微積分甲下</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={210}
                  y={684}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  微積分甲下
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Linear_Algebra">
            <rect
              x={110}
              y={772}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "812px",
                      marginLeft: "111px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>線性代數</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={210}
                  y={814}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  線性代數
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Probability">
            <rect
              x={340}
              y={772}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "812px",
                      marginLeft: "341px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>機率</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={440}
                  y={814}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  機率
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Discrete_Mathematics">
            <rect
              x={337}
              y={512}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "552px",
                      marginLeft: "338px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>離散數學</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={437}
                  y={554}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  離散數學
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Formal_Languages_and_Automata_Theory">
            <rect
              x={337}
              y={642}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "682px",
                      marginLeft: "338px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            自動機與形式語言
                            <br />
                            (Automata)
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={437}
                  y={684}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  自動機與形式語言(Automata)...
                </text>
              </switch>
            </g>
          </a>
          <path
            d="M 210 592 L 210 632.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 210 640.88 L 204.5 629.88 L 210 632.63 L 215.5 629.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 160 722 L 160 762.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 160 770.88 L 154.5 759.88 L 160 762.63 L 165.5 759.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 260 722 L 260 747 L 390 747 L 390 762.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 390 770.88 L 384.5 759.88 L 390 762.63 L 395.5 759.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 387 592 L 387 632.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 387 640.88 L 381.5 629.88 L 387 632.63 L 392.5 629.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 260 852 L 260 912.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 260 920.88 L 254.5 909.88 L 260 912.63 L 265.5 909.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 440 852 L 440 912.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 440 920.88 L 434.5 909.88 L 440 912.63 L 445.5 909.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <rect
            x={637}
            y={422}
            width={773}
            height={470}
            rx="70.5"
            ry="70.5"
            fill="url(#mx-gradient-ffcc99-1-ffccff-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "771px",
                    height: "1px",
                    paddingTop: "657px",
                    marginLeft: "638px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "30px" }} color="#ff3333">
                          <br />
                          程式設計與演算法系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1024}
                y={661}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                程式設計與演算法系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Data_Structures_and_Algorithms">
            <rect
              x={920}
              y={642}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "682px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            資料結構與演算法
                            <br />
                            (DSA)
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={684}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  資料結構與演算法(DSA)...
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Introduction_to_Computer_Programming">
            <rect
              x={920}
              y={512}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "552px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>計算機程式設計</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={554}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  計算機程式設計
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Systems_Programming">
            <rect
              x={920}
              y={772}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "812px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>系統程式設計(SP)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={814}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  系統程式設計(SP)
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Algorithm_Design_and_Analysis">
            <rect
              x={680}
              y={642}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "682px",
                      marginLeft: "681px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>演算法設計與分析(ADA)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={780}
                  y={684}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  演算法設計與分析(ADA)
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Programming_for_Business_Computing_in_Python">
            <rect
              x={680}
              y={512}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "552px",
                      marginLeft: "681px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            用 Python 做商管程式設計
                            <br />
                            （線上課程）
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={780}
                  y={554}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  用 Python 做商管程式設計...
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Object_Oriented_Programming_Language">
            <rect
              x={1170}
              y={512}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "552px",
                      marginLeft: "1171px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            物件導向程式語言
                            <br />
                            (OOP)
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1270}
                  y={554}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  物件導向程式語言(OOP)...
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Fundamental_Object_Oriented_Programming">
            <rect
              x={1170}
              y={642}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "682px",
                      marginLeft: "1171px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>基礎物件導向程式設計(OOP)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1270}
                  y={684}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  基礎物件導向程式設計(OOP)
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Compiler_Design">
            <rect
              x={680}
              y={772}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "812px",
                      marginLeft: "681px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>編譯程式設計</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={780}
                  y={814}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  編譯程式設計
                </text>
              </switch>
            </g>
          </a>
          <path
            d="M 1020 592 L 1020 632.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1020 640.88 L 1014.5 629.88 L 1020 632.63 L 1025.5 629.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 970 722 L 970 762.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 970 770.88 L 964.5 759.88 L 970 762.63 L 975.5 759.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 920 682 L 889.37 682"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 881.12 682 L 892.12 676.5 L 889.37 682 L 892.12 687.5 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 1120 552 L 1160.63 552"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1168.88 552 L 1157.88 557.5 L 1160.63 552 L 1157.88 546.5 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 1270 592 L 1270 632.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1270 640.88 L 1264.5 629.88 L 1270 632.63 L 1275.5 629.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <rect
            x={80}
            y={1142}
            width={240}
            height={330}
            rx={36}
            ry={36}
            fill="url(#mx-gradient-ffcc99-1-cce5ff-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "238px",
                    height: "1px",
                    paddingTop: "1307px",
                    marginLeft: "81px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          <br />
                          網站前/後端設計
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={200}
                y={1311}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                網站前/後端設計...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Web_Programming">
            <rect
              x={100}
              y={1232}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1272px",
                      marginLeft: "101px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>網路服務程式設計</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={200}
                  y={1274}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  網路服務程式設計
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Database_Management_System">
            <rect
              x={100}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "101px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>資料庫系統-從SQL到NoSQL</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={200}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  資料庫系統-從SQL到NoSQL
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={1450}
            y={702}
            width={240}
            height={190}
            rx="28.5"
            ry="28.5"
            fill="url(#mx-gradient-ffff66-1-ffcc99-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "238px",
                    height: "1px",
                    paddingTop: "797px",
                    marginLeft: "1451px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "30px" }} color="#ff3333">
                          MIS網管系列
                          <br />
                          <br />
                          <br />
                          <br />
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1570}
                y={801}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                MIS網管系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Network_Administration_and_System_Administration">
            <rect
              x={1470}
              y={772}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "812px",
                      marginLeft: "1471px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>網路管理與系統管理/實驗(NASA)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1570}
                  y={814}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  網路管理與系統管理/實驗(NASA)
                </text>
              </switch>
            </g>
          </a>
          <path
            d="M 1470 812 L 1129.37 812"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1121.12 812 L 1132.12 806.5 L 1129.37 812 L 1132.12 817.5 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 487 592 L 487 617 L 970 617 L 970 632.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 970 640.88 L 964.5 629.88 L 970 632.63 L 975.5 629.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 487 722 L 487 747 L 730 747 L 730 762.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 730 770.88 L 724.5 759.88 L 730 762.63 L 735.5 759.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <rect
            x={850}
            y={922}
            width={610}
            height={330}
            rx="49.5"
            ry="49.5"
            fill="url(#mx-gradient-e6e6e6-1-b3b3b3-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "608px",
                    height: "1px",
                    paddingTop: "1087px",
                    marginLeft: "851px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          資工傳統三大領域：網路/作業系統/結構
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1155}
                y={1091}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                資工傳統三大領域：網路/作業系統/結構...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Operating_Systems">
            <rect
              x={1150}
              y={1012}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1052px",
                      marginLeft: "1151px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>作業系統(OS)</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1250}
                  y={1054}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  作業系統(OS)
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Computer_Networks">
            <rect
              x={920}
              y={1012}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1052px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>計算機網路</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={1054}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  計算機網路
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Computer_Architecture">
            <rect
              x={1150}
              y={1132}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1172px",
                      marginLeft: "1151px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>計算機結構</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1250}
                  y={1174}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  計算機結構
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Computer_Network_Laboratory">
            <rect
              x={920}
              y={1132}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1172px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>計算機網路實驗</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={1174}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  計算機網路實驗
                </text>
              </switch>
            </g>
          </a>
          <path
            d="M 1250 1092 L 1250 1122.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1250 1130.88 L 1244.5 1119.88 L 1250 1122.63 L 1255.5 1119.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 1020 1092 L 1020 1122.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1020 1130.88 L 1014.5 1119.88 L 1020 1122.63 L 1025.5 1119.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 1020 852 L 1020 1002.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1020 1010.88 L 1014.5 999.88 L 1020 1002.63 L 1025.5 999.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 1070 852 L 1070 932 L 1250 932 L 1250 1002.63"
            fill="none"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 1250 1010.88 L 1244.5 999.88 L 1250 1002.63 L 1255.5 999.88 Z"
            fill="#000000"
            stroke="#000000"
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <rect
            x={350}
            y={1142}
            width={470}
            height={330}
            rx="49.5"
            ry="49.5"
            fill="url(#mx-gradient-ffffcc-1-99ccff-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "468px",
                    height: "1px",
                    paddingTop: "1307px",
                    marginLeft: "351px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          不知道有什麼用a.k.a.混學分系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={585}
                y={1311}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                不知道有什麼用a.k.a.混學分系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Introduction_to_Computer">
            <rect
              x={370}
              y={1232}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1272px",
                      marginLeft: "371px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>計算機概論</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={470}
                  y={1274}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  計算機概論
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Computer_Science_and_Information_Technology">
            <rect
              x={600}
              y={1232}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1272px",
                      marginLeft: "601px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>前瞻資訊科技一</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={700}
                  y={1274}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  前瞻資訊科技一
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Computer_Science_and_Information_Technology">
            <rect
              x={600}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#99ff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "601px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>前瞻資訊科技二</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={700}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  前瞻資訊科技二
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Modern_Sciences_and_Science_of_Mind">
            <rect
              x={370}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#e1d5e7"
              stroke="#33ff99"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "371px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            現代科學
                            <br />
                            與心靈科學
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={470}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  現代科學與心靈科學...
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={90}
            y={2}
            width={1560}
            height={390}
            rx="58.5"
            ry="58.5"
            fill="#ffffff"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <rect
            x="109.26"
            y="139.42"
            width={380}
            height={50}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "164px",
                    marginLeft: "299px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "30px" }} color="#ff3333">
                          邊框顏色代表修課時年級
                          <br />
                          方格內部顏色代表課程性質
                          <br />
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={299}
                y={168}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                邊框顏色代表修課時年級方格內部顏色代表課程性質...
              </text>
            </switch>
          </g>
          <rect
            x="109.26"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#dae8fc"
            stroke="#ff3333"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "110px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>
                          共同必修
                          <br />
                          （語言課）
                        </b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={206}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                共同必修（語言課）...
              </text>
            </switch>
          </g>
          <rect
            x="92.78"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "208px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "34px" }} color="#ff3333">
                          大一上(107-1)
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={208}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大一上(107-1)
              </text>
            </switch>
          </g>
          <rect
            x="330.74"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#f8cecc"
            stroke="#ff9933"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "332px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>系上必修</b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={427}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                系上必修
              </text>
            </switch>
          </g>
          <rect
            x="314.26"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "429px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "34px" }} color="#ff9933">
                          大一下(107-2)
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={429}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大一下(107-2)
              </text>
            </switch>
          </g>
          <rect
            x="552.22"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#e1d5e7"
            stroke="#ffff33"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "553px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>系上選修</b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={649}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                系上選修
              </text>
            </switch>
          </g>
          <rect
            x="535.74"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "651px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <b>
                        <font style={{ fontSize: "34px" }} color="#ffff33">
                          大二上(108-1)
                        </font>
                      </b>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={651}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大二上(108-1)
              </text>
            </switch>
          </g>
          <rect
            x="773.7"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#fff2cc"
            stroke="#99ff33"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "775px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>系外選修</b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={870}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                系外選修
              </text>
            </switch>
          </g>
          <rect
            x="757.22"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "872px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ fontSize: "34px" }}>
                        <b>
                          <font color="#99ff33">大二下(108-2)</font>
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={872}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大二下(108-2)
              </text>
            </switch>
          </g>
          <rect
            x="995.19"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#ffe6cc"
            stroke="#33ff99"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "996px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>通識</b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1091}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                通識
              </text>
            </switch>
          </g>
          <rect
            x="972.93"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "1088px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ fontSize: "34px" }}>
                        <b>
                          <font color="#33ffff">大三上(109-1)</font>
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1088}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大三上(109-1)
              </text>
            </switch>
          </g>
          <rect
            x="1216.67"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#d5e8d4"
            stroke="#3333ff"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "1218px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>體育課</b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1313}
                y={324}
                fill="#000000"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                體育課
              </text>
            </switch>
          </g>
          <rect
            x="1200.19"
            y="232.97"
            width={230}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "1315px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ fontSize: "34px" }}>
                        <b>
                          <font color="#3333ff">大三下(109-2)</font>
                        </b>
                      </span>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1315}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                大三下(109-2)
              </text>
            </switch>
          </g>
          <rect
            x="1438.15"
            y="284.42"
            width="192.59"
            height="74.84"
            rx="11.23"
            ry="11.23"
            fill="#f5f5f5"
            stroke="#000000"
            strokeWidth={10}
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "191px",
                    height: "1px",
                    paddingTop: "322px",
                    marginLeft: "1439px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "8px",
                        fontFamily: "Verdana",
                        color: "#333333",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "24px" }}>
                        <b>
                          <font color="#000000">服務學習/國防</font>
                        </b>
                        <br />
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1534}
                y={324}
                fill="#333333"
                fontFamily="Verdana"
                fontSize="8px"
                textAnchor="middle"
              >
                服務學習/國防
              </text>
            </switch>
          </g>
          <rect
            x="1425.93"
            y="232.97"
            width={220}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "248px",
                    marginLeft: "1536px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ fontSize: "34px" }}>
                        <b>暑修(107-3,4)</b>
                      </span>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1536}
                y={252}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                暑修(107-3,4)
              </text>
            </switch>
          </g>
          <rect
            x="783.33"
            y={152}
            width={120}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "167px",
                    marginLeft: "843px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font size={1}>
                        <b style={{ fontSize: "50px" }}>圖例</b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={843}
                y={171}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                圖例
              </text>
            </switch>
          </g>
          <rect
            x={1200}
            y="139.42"
            width={410}
            height={50}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "164px",
                    marginLeft: "1405px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          點擊地圖上的課程方框
                          <br />
                          下方會顯示該課程的詳細內容
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1405}
                y={168}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                點擊地圖上的課程方框 下方會顯示該課程的詳細內容
              </text>
            </switch>
          </g>
          <rect
            x={860}
            y={1277}
            width={800}
            height={195}
            rx="29.25"
            ry="29.25"
            fill="url(#mx-gradient-ffccff-1-99ff99-1-s-0)"
            stroke="#4d4d4d"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "798px",
                    height: "1px",
                    paddingTop: "1375px",
                    marginLeft: "861px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          <br />
                          學了完全用不到的必修系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1260}
                y={1378}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                學了完全用不到的必修系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#College_Chinese">
            <rect
              x={1400}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#dae8fc"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "1401px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>大學國文二</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1500}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  大學國文二
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#General_Chemistry">
            <rect
              x={920}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "921px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>普通化學丙</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1020}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  普通化學丙
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#General_Biology">
            <rect
              x={1160}
              y={1362}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f8cecc"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1402px",
                      marginLeft: "1161px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>普通生物學丙</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1260}
                  y={1404}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  普通生物學丙
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={1400}
            y={1572}
            width={260}
            height={570}
            fill="url(#mx-gradient-ffffff-1-ffffff-1-s-0)"
            stroke="none"
            pointerEvents="all"
          />
          <rect
            x={1400}
            y={1572}
            width={260}
            height={570}
            rx={39}
            ry={39}
            fill="url(#mx-gradient-ffe6cc-1-ff9933-1-s-0)"
            stroke="#666666"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "258px",
                    height: "1px",
                    paddingTop: "1857px",
                    marginLeft: "1401px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          炫砲體育課系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1530}
                y={1861}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                炫砲體育課系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Health_Related_Physical_Fitness">
            <rect
              x={1430}
              y={1662}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#d5e8d4"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1702px",
                      marginLeft: "1431px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>健康體適能</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1530}
                  y={1704}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  健康體適能
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Basketball-intermediate">
            <rect
              x={1430}
              y={1782}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#d5e8d4"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1822px",
                      marginLeft: "1431px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>籃球中級</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1530}
                  y={1824}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  籃球中級
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Beginning_Swimming">
            <rect
              x={1430}
              y={1902}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#d5e8d4"
              stroke="#33ffff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1942px",
                      marginLeft: "1431px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>游泳初級</b>
                          <span
                            style={{
                              color: "rgba(0 , 0 , 0 , 0)",
                              fontFamily: "monospace",
                              fontSize: "0px",
                            }}
                          >
                            %3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220%22%2F%3E%3CmxCell%20id%3D%221%22%20parent%3D%220%22%2F%3E%3CmxCell%20id%3D%222%22%20value%3D%22%26lt%3Bfont%20style%3D%26quot%3Bfont-size%3A%2024px%26quot%3B%26gt%3B%26lt%3Bb%26gt%3B%E7%B1%83%E7%90%83%E4%B8%AD%E7%B4%9A%26lt%3B%2Fb%26gt%3B%26lt%3Bbr%26gt%3B%26lt%3B%2Ffont%26gt%3B%22%20style%3D%22rounded%3D1%3BwhiteSpace%3Dwrap%3Bhtml%3D1%3Bshadow%3D0%3BlabelBackgroundColor%3Dnone%3BstrokeWidth%3D1%3BfontFamily%3DVerdana%3BfontSize%3D8%3Balign%3Dcenter%3BfillColor%3D%23d5e8d4%3BstrokeColor%3D%2382b366%3B%22%20vertex%3D%221%22%20parent%3D%221%22%3E%3CmxGeometry%20x%3D%22960%22%20y%3D%221430%22%20width%3D%22200%22%20height%3D%2280%22%20as%3D%22geometry%22%2F%3E%3C%2FmxCell%3E%3C%2Froot%3E%3C%2FmxGraphModel%3E
                          </span>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1530}
                  y={1944}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  游泳初級%3CmxGraphModel%3E%3Croot%3E%3CmxCell%20id%3D%220...
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Yoga">
            <rect
              x={1430}
              y={2022}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#d5e8d4"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "2062px",
                      marginLeft: "1431px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>瑜伽</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1530}
                  y={2064}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  瑜伽
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={80}
            y={1582}
            width={700}
            height={700}
            fill="#f5f5f5"
            stroke="#ff9933"
            strokeWidth={10}
            strokeDasharray="30 30"
            pointerEvents="all"
          />
          <path
            d="M 80 1942 L 780 1942"
            fill="none"
            stroke="#ff9933"
            strokeWidth={10}
            strokeMiterlimit={10}
            strokeDasharray="30 30"
            pointerEvents="all"
          />
          <path
            d="M 430 1582 L 430 2282"
            fill="none"
            stroke="#ff9933"
            strokeWidth={10}
            strokeMiterlimit={10}
            strokeDasharray="30 30"
            pointerEvents="all"
          />
          <a xlinkHref="#Hand-on_Experience_of_Field_Life_I">
            <rect
              x={440}
              y={1702}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1742px",
                      marginLeft: "441px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>田園生活體驗一</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={540}
                  y={1744}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  田園生活體驗一
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Reading_Taiwans_Modernism_Fiction">
            <rect
              x={560}
              y={1602}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1642px",
                      marginLeft: "561px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>台灣現代主義小說</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={660}
                  y={1644}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  台灣現代主義小說
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Freshman_Seminar">
            <rect
              x={120}
              y={1602}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#fff2cc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1642px",
                      marginLeft: "121px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>新生專題</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={220}
                  y={1644}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  新生專題
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Global_Music_Culture">
            <rect
              x={130}
              y={2082}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "2122px",
                      marginLeft: "131px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>全球音樂文化</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={230}
                  y={2124}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  全球音樂文化
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#General_Psychology">
            <rect
              x={210}
              y={1962}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#ff3333"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "2002px",
                      marginLeft: "211px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>普通心理學</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={310}
                  y={2004}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  普通心理學
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Crime_Drugs_and_Humanities">
            <rect
              x={450}
              y={1962}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "2002px",
                      marginLeft: "451px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>犯罪毒品、與人性</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={550}
                  y={2004}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  犯罪毒品、與人性
                </text>
              </switch>
            </g>
          </a>
          <path
            d="M 429 2282 L 429 1605.18"
            fill="none"
            stroke="#000000"
            strokeWidth={10}
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 429 1593.18 L 437 1609.18 L 429 1605.18 L 421 1609.18 Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth={10}
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <path
            d="M 80 1942 L 756.82 1942"
            fill="none"
            stroke="#000000"
            strokeWidth={10}
            strokeMiterlimit={10}
            pointerEvents="stroke"
          />
          <path
            d="M 768.82 1942 L 752.82 1950 L 756.82 1942 L 752.82 1934 Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth={10}
            strokeMiterlimit={10}
            pointerEvents="all"
          />
          <rect
            x={155}
            y={1532}
            width={530}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "1547px",
                    marginLeft: "420px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font size={1} color="#ff8000">
                        <b style={{ fontSize: "50px" }}>
                          通識/系外選修涼甜指標
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={420}
                y={1551}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                通識/系外選修涼甜指標
              </text>
            </switch>
          </g>
          <rect
            x={820}
            y={1572}
            width={250}
            height={320}
            rx="37.5"
            ry="37.5"
            fill="url(#mx-gradient-b9e0a5-1-c3abd0-1-s-0)"
            stroke="#666666"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "248px",
                    height: "1px",
                    paddingTop: "1732px",
                    marginLeft: "821px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          暑修外文
                          <br />
                          好爽但好貴系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={945}
                y={1736}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                暑修外文好爽但好貴系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#German">
            <rect
              x={845}
              y={1792}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#dae8fc"
              stroke="#000000"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1832px",
                      marginLeft: "846px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>德文一下</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={945}
                  y={1834}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  德文一下
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#German">
            <rect
              x={840}
              y={1682}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#dae8fc"
              stroke="#000000"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1722px",
                      marginLeft: "841px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>德文一上</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={940}
                  y={1724}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  德文一上
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={1110}
            y={1572}
            width={260}
            height={570}
            rx={39}
            ry={39}
            fill="url(#mx-gradient-ffcccc-1-e6e6e6-1-s-0)"
            stroke="#666666"
            strokeWidth={5}
            strokeDasharray="15 15"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "258px",
                    height: "1px",
                    paddingTop: "1857px",
                    marginLeft: "1111px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "normal",
                        wordWrap: "normal",
                      }}
                    >
                      <font style={{ fontSize: "30px" }} color="#ff3333">
                        <b>
                          坑爹0學分系列
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={1240}
                y={1861}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                坑爹0學分系列...
              </text>
            </switch>
          </g>
          <a xlinkHref="#Student_Service_Education">
            <rect
              x={1140}
              y={1662}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f5f5f5"
              stroke="#ff9933"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1702px",
                      marginLeft: "1141px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#333333",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            <font color="#000000">服務學習一</font>
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1240}
                  y={1704}
                  fill="#333333"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  服務學習一
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Student_Service_Education">
            <rect
              x={1144}
              y={1782}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f5f5f5"
              stroke="#33ffff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1822px",
                      marginLeft: "1145px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#333333",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            <font color="#000000">服務學習二</font>
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1244}
                  y={1824}
                  fill="#333333"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  服務學習二
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#Student_Service_Education">
            <rect
              x={1144}
              y={1902}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f5f5f5"
              stroke="#3333ff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1942px",
                      marginLeft: "1145px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#333333",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>
                            <font color="#000000">服務學習三</font>
                          </b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1244}
                  y={1944}
                  fill="#333333"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  服務學習三
                </text>
              </switch>
            </g>
          </a>
          <a xlinkHref="#All-Out_Defense_Education">
            <rect
              x={1145}
              y={2022}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#f5f5f5"
              stroke="#33ffff"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "2062px",
                      marginLeft: "1146px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font>
                          <span style={{ fontSize: "24px" }}>
                            <b>全民國防教育軍事訓練－國防科技</b>
                          </span>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={1245}
                  y={2064}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  全民國防教育軍事訓練－國防科技
                </text>
              </switch>
            </g>
          </a>
          <rect
            x={450}
            y={1602}
            width={100}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "1617px",
                    marginLeft: "500px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font size={1}>
                        <b style={{ fontSize: "40px" }}>甜度</b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={500}
                y={1621}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                甜度
              </text>
            </switch>
          </g>
          <rect
            x={660}
            y={1892}
            width={100}
            height={30}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "1907px",
                    marginLeft: "710px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font size={1}>
                        <b style={{ fontSize: "40px" }}>涼度</b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={710}
                y={1911}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                涼度
              </text>
            </switch>
          </g>
          <a xlinkHref="#Medicine_and_Life">
            <rect
              x={330}
              y={1842}
              width={200}
              height={80}
              rx={12}
              ry={12}
              fill="#ffe6cc"
              stroke="#ffff33"
              strokeWidth={10}
              pointerEvents="all"
            />
            <g transform="translate(-0.5 -0.5)">
              <switch>
                <foreignObject
                  style={{ overflow: "visible", textAlign: "left" }}
                  pointerEvents="none"
                  width="100%"
                  height="100%"
                  requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      display: "flex",
                      alignItems: "unsafe center",
                      justifyContent: "unsafe center",
                      width: "198px",
                      height: "1px",
                      paddingTop: "1882px",
                      marginLeft: "331px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          fontSize: "8px",
                          fontFamily: "Verdana",
                          color: "#000000",
                          lineHeight: "1.2",
                          pointerEvents: "all",
                          whiteSpace: "normal",
                          wordWrap: "normal",
                        }}
                      >
                        <font style={{ fontSize: "24px" }}>
                          <b>醫學與生活</b>
                          <br />
                        </font>
                      </div>
                    </div>
                  </div>
                </foreignObject>
                <text
                  x={430}
                  y={1884}
                  fill="#000000"
                  fontFamily="Verdana"
                  fontSize="8px"
                  textAnchor="middle"
                >
                  醫學與生活
                </text>
              </switch>
            </g>
          </a>
          <rect
            x="623.33"
            y={52}
            width={440}
            height={40}
            fill="none"
            stroke="none"
            pointerEvents="all"
          />
          <g transform="translate(-0.5 -0.5)">
            <switch>
              <foreignObject
                style={{ overflow: "visible", textAlign: "left" }}
                pointerEvents="none"
                width="100%"
                height="100%"
                requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              >
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    display: "flex",
                    alignItems: "unsafe center",
                    justifyContent: "unsafe center",
                    width: "1px",
                    height: "1px",
                    paddingTop: "72px",
                    marginLeft: "843px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      fontSize: 0,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: "12px",
                        fontFamily: "Helvetica",
                        color: "#000000",
                        lineHeight: "1.2",
                        pointerEvents: "all",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <font style={{ fontSize: "70px" }} color="#cc6600">
                        <b>我的選課地圖</b>
                      </font>
                    </div>
                  </div>
                </div>
              </foreignObject>
              <text
                x={843}
                y={76}
                fill="#000000"
                fontFamily="Helvetica"
                fontSize="12px"
                textAnchor="middle"
              >
                我的選課地圖
              </text>
            </switch>
          </g>
        </g>
        <switch>
          <g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility" />
          <a
            transform="translate(0,-5)"
            xlinkHref="https://www.diagrams.net/doc/faq/svg-export-text-problems"
            target="_blank"
          >
            <text textAnchor="middle" fontSize="10px" x="50%" y="100%">
              Viewer does not support full SVG 1.1
            </text>
          </a>
        </switch>
      </svg>
    </Container>
  );
}

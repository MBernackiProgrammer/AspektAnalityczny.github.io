export default function Zurek(){


    function calculate(defaultNumberOfPortions:number, numberOflistItems:number){
    const input:number = Number((document.getElementById('quantity') as HTMLInputElement)!.value);

    if(isNaN(input) || isNaN(defaultNumberOfPortions) || isNaN(numberOflistItems)){
        return;
    }

    for(let c=1;c<=numberOflistItems;c++){
        const i = document.getElementById('i'+c.toString())!.innerHTML;
        const q = document.getElementById('q'+c.toString())!;

        q.innerHTML = ((Number(i) / defaultNumberOfPortions) * input).toFixed(3);
    }
}


    return(
        <>
        <main>
        <article>
            <div className="articleImg">
                <img src="https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zurek_01_1.jpg"/>
            </div>

            <div style={{width: "50px;"}}></div>

            <div className="articleText">
                <p>
                    Żurek, znana polska zupa, o charakterystycznym kwaskowatym smaku. Doprawiana majerankiem, czosnkiem, śmietaną - kremowa i pyszna. Serwowana z kawałkami mięsa, chlebem i jajkami. Jak zrobić żurek, by pachniał i smakował doskonale?
                </p>
                
                <h2>Ciekawostki o zupie:</h2>
                <p>
                    <ul>
                        <li>
                            W różnych regionach kraju żurek gotuje się wedle różnych receptur. Różnica najczęściej polega na użyciu różnych rodzajów mięsa czy wywaru/bulionu. Do żurku używa się wędzonych kości, wędzonki, szynki, smażonej kiełbasy, białej kiełbasy, czy żeberek – ja mam jeszcze inny sposób, dzięki któremu uzyskuję głęboki mięsny aromat zupy.
                        </li>
                        <li>
                            Często spotyka się też w żurku marchew, ziemniaki, a nawet dodatek sporej ilości chrzanu – dla mnie jednak zarówno obecność marchewki jak i ziemniaków odwraca uwagę od tego, co w tej zupie najlepsze. Marchewka dodatkowo wprowadza za dużo słodyczy do smaku zupy. Ziemniaki są do przyjęcia, jeżeli zależy Ci na ugotowaniu sycącego żurku, który stanowił będzie jednodaniowy obiad dla całej rodziny.
                        </li>
                    </ul>
                </p>

                <h2>
                    Składniki do przygotowania żurku (6 porcji)
                </h2>
                <p>
                    <ul>
                        <li>
                            <span id="i1">2</span> litry bulionu                            
                        </li>
                        <li>
                            <span id="i2">500</span> ml zakwasu żytniego                            
                        </li>
                        <li>
                            <span id="i3">4</span> białe kiełbasy (surowe)                            
                        </li>
                        <li>
                            <span id="i4">200</span> g boczku                            
                        </li>
                        <li>
                            <span id="i5">1</span> duża cebula                            
                        </li>
                        <li>
                            <span id="i6">2</span> łyżeczki chrzanu                            
                        </li>
                        <li>
                            <span id="i7">1</span> ząbek czosnku                            
                        </li>
                        <li>
                            <span id="i8">3</span> łyżki śmietany 30% lub 36%
                        </li>
                        <li>
                            <span id="i9">1</span>suszony, starty majeranek
                        </li>
                        <li>
                            sól i pieprz do smaku
                        </li>
                        <li>
                            do podania ugotowane na twardo jajka
                        </li>
                    </ul>
                    
                </p>

                <h2>
                    Ile składników potrzebuję?
                </h2>
                <p>
                    Ilość porcji <input type="number" name="quantity" id="quantity" onChange={() => calculate(6, 9)}/>
                </p>

                <ul>
                    <li>
                        <span id="q1">2</span> litry bulionu                            
                    </li>
                    <li>
                        <span id="q2">500</span> ml zakwasu żytniego                            
                    </li>
                    <li>
                        <span id="q3">4</span> białe kiełbasy (surowe)                            
                    </li>
                    <li>
                        <span id="q4">200</span> g boczku                            
                    </li>
                    <li>
                        <span id="q5">1</span> duża cebula                            
                    </li>
                    <li>
                        <span id="q6">2</span> łyżeczki chrzanu                            
                    </li>
                    <li>
                        <span id="q7">1</span> ząbek czosnku                            
                    </li>
                    <li>
                        <span id="q8">3</span> łyżki śmietany 30% lub 36%
                    </li>
                    <li>
                        <span id="q9">1</span> suszony, starty majeranek
                    </li>
                    <li>
                        sól i pieprz do smaku
                    </li>
                    <li>
                        do podania ugotowane na twardo jajka
                    </li>
                </ul>

            </div>

        </article>

        <aside>
            
        </aside>
    </main>
        </>
    )
}
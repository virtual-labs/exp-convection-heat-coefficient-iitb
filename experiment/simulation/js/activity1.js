let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Natural Convection, Local and Average Heat Transfer Coefficient</h5>
        <p>Learning Objective: Calculate the rate of heat loss from cubical furnace.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate rate of heat loss", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 1</p> <br>
        <h5> Find the rate of heat loss from a cubical furnace kept on a concrete floor. If the outside temperature of the furnace is ${act1_t1}<sup>o</sup>C and surrounding air is at ${act1_t2}<sup>o</sup>C. The sides of the furnace are ${act1_l}m. At mean temperature, take the following properties. </h5>
        <h5>$$\\rho = ${act1_rho}\\ \\ \\ \\ \\ \\ \\ K = ${act1_k}w/m-k\\ \\ \\ \\ \\ \\ \\ C_P = ${act1_cp}J/Kg-k $$</h5>
        <h5>$$ P_r = ${act1_pr}\\ \\ \\ \\ \\ \\ \\ \\mu = ${act1_mu_disp}*10^{-6}Ns/m\\ \\ \\ \\ \\ \\ \\ \\nu = ${act1_nu_disp}*10^{-6}m^2/s $$</h5>
        <br><br>


        <h5>Mean temperature</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ T_m = \\frac{T_s + T_f}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp'> <span id='cal01-val-sp'></span> &deg;C<sup>2</sup>-k

            <button class='btn btn-info std-btn' onclick='verify_act1_tm();' id='btn_act1_tm' style="width:20%">Verify</button>
        </p>

        <div id="act1_beta" style="display: none">
            <h5>Thermal coefficient of the expansion</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;'>
                    $$ \\beta =\\frac{1}{T_m} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp'> <span id='cal02-val-sp'></span><sup>o</sup>K<sup>-1</sup>

                <button class='btn btn-info std-btn' onclick='verify_act1_beta();' id='btn_act1_beta' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_grpr" style="display: none">
            <h5>1. For vertical face of furnace</h5>
            <h5>Characterstic length L = ${act1_ch_l}m</h5>
            <h5>G<sub>r</sub> - Grashof Number</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ G_r P_r = \\frac{g \\beta \\Delta T L^3}{\\nu^2} P_r $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp'> <span id='cal03-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_grpr();' id='btn_act1_grpr' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_h" style="display: none">
            <h5>Now</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ N_u = 0.56 (G_r P_r)^{1/4} $$
                    $$ N_u = \\frac{h L}{K} $$
                    $$ h = \\frac{N_u K}{L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_h();' id='btn_act1_h' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_h1" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ N_u = 0.13 (G_r P_r)^{1/4} $$
                    $$ N_u = \\frac{h L}{K} $$
                    $$ h = \\frac{N_u K}{L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m/s

                <button class='btn btn-info std-btn' onclick='verify_act1_h1();' id='btn_act1_h1' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_qs" style="display: none">
            <h5>Heat loss from 4 vertical faces</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q_S = 4 h A (T_s - T_f) $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> m/s

                <button class='btn btn-info std-btn' onclick='verify_act1_qs();' id='btn_act1_qs' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_chl" style="display: none">
            <h5>2. For top surface of furnace</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ L = \\frac{A}{P} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m/s

                <button class='btn btn-info std-btn' onclick='verify_act1_chl();' id='btn_act1_chl' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_t_grpr" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Characterstic\\ length\\ L = \\frac{A}{P} $$
                    $$ G_r P_r = \\frac{g \\beta \\Delta T L^3}{\\nu^2} P_r $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_t_grpr();' id='btn_act1_t_grpr' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_t_h" style="display: none">
            <h5>Now</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ N_u = 0.56 (G_r P_r)^{1/4} $$
                    $$ N_u = \\frac{h L}{K} $$
                    $$ h = \\frac{N_u K}{L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act1_t_h();' id='btn_act1_t_h' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_t_h1" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ N_u = 0.14 (G_r P_r)^{1/3} $$
                    $$ N_u = \\frac{h L}{K} $$
                    $$ h = \\frac{N_u K}{L} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act1_t_h1();' id='btn_act1_t_h1' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_qt" style="display: none">
            <h5>Heat loss from top surface</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q_T = h A (T_s - T_f) $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_qt();' id='btn_act1_qt' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act1_q" style="display: none">
            <h5>Heat loss from top surface</h5>
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ Q = Q_T + Q_S $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal17-inp'> <span id='cal17-val-sp'></span> w

                <button class='btn btn-info std-btn' onclick='verify_act1_q();' id='btn_act1_q' style="width:20%">Verify</button>
            </p>
        </div>

    </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    let num = Math.floor(Math.random() * (10)) + 1;
    let ts = act1_t1 + num;
    let tf = act1_t2 - num;
    act1_tm = (ts + tf) / 2;
    act1_beta = 1 / (act1_tm + 273);
    let del_t = act1_t1 - act1_t2;
    act1_s_grpr = ((g * act1_beta * del_t * Math.pow(act1_l, 3)) / Math.pow(act1_nu, 2)) * act1_pr;
    if (act1_s_grpr > 1e4 && act1_s_grpr < 1e8) {
        let nu = 0.56 * Math.pow((act1_s_grpr), (1.0 / 4.0));
        act1_h = (nu * act1_k) / act1_l;
    }
    else if (act1_s_grpr > 1e8 && act1_s_grpr < 1e12) {
        let nu = 0.13 * Math.pow((act1_s_grpr), (1.0 / 4.0));
        act1_h = (nu * act1_k) / act1_l;
    }
    else {
        console.log("No valid input");
    }
    a = act1_l * act1_l;
    act1_qs = 4 * act1_h * a * (ts - tf);
    let p = 4 * act1_l;
    act1_ch_l = a / p;
    act1_t_grpr = ((g * act1_beta * del_t * Math.pow(act1_ch_l, 3)) / Math.pow(act1_nu, 2)) * act1_pr;
    if (act1_t_grpr > 1e5 && act1_t_grpr < 1e7) {
        let nu = 0.56 * Math.pow((act1_t_grpr), (1.0 / 4.0));
        act1_t_h = (nu * act1_k) / act1_ch_l;
    }
    else if (act1_s_grpr > 2e7 && act1_s_grpr < 2e10) {
        let nu = 0.14 * Math.pow((act1_t_grpr), (1.0 / 3.0));
        act1_t_h = (nu * act1_k) / act1_ch_l;
    }
    else {
        console.log("No valid input");
    }
    act1_qt = 4 * act1_t_h * a * (ts - tf);
    act1_q = act1_qt + act1_qs;
    console.log("t1= ", act1_t1);
    console.log("t2= ", act1_t2);
    console.log("num= ", num);
    console.log("ts= ", ts);
    console.log("tf= ", tf);
    console.log("tm= ", act1_tm);
    console.log("beta= ", act1_beta);
    console.log("s_grpr= ", act1_s_grpr);
    console.log("a= ", a);
    console.log("h= ", act1_h);
    console.log("Qs= ", act1_qs);
    console.log("Ch L= ", act1_ch_l);
    console.log("Top gr pr= ", act1_t_grpr);
    console.log("top h= ", act1_t_h);
    console.log("Qt= ", act1_qt);
    console.log("Total Q= ", act1_q);
}
function verify_act1_tm() {
    let btn = document.getElementById('btn_act1_tm');
    let div = document.getElementById('act1_beta');
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(3)), parseFloat(act1_tm.toFixed(3)))) {
        alert('Tm value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act1_tm).toFixed(1)}`;
    div.style.display = 'block';
}
function verify_act1_beta() {
    let btn = document.getElementById('btn_act1_beta');
    let div = document.getElementById('act1_grpr');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act1_beta.toFixed(2)))) {
        alert('Beta value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${(act1_beta).toFixed(4)}`;
    div.style.display = 'block';
}
function verify_act1_grpr() {
    let btn = document.getElementById('btn_act1_grpr');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(3)), parseFloat(act1_s_grpr.toFixed(3)))) {
        alert('Re value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp3.remove();
    sp3.innerText = `${(act1_s_grpr).toFixed(2)}`;
    if (act1_s_grpr >= 10e4 && act1_s_grpr <= 10e8) {
        let div = document.getElementById('act1_h');
        div.style.display = 'block';
    }
    else if (act1_s_grpr > 10e8 && act1_s_grpr <= 10e12) {
        let div = document.getElementById('act1_h1');
        div.style.display = 'block';
    }
}
function verify_act1_h() {
    let btn = document.getElementById('btn_act1_h');
    let div = document.getElementById('act1_qs');
    let inp4 = document.getElementById('cal04-inp');
    let sp4 = document.getElementById('cal04-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(3)), parseFloat(act1_h.toFixed(3)))) {
        alert('h value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp4.remove();
    sp4.innerText = `${(act1_h).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_h1() {
    let btn = document.getElementById('btn_act1_h1');
    let div = document.getElementById('act1_qs');
    let inp5 = document.getElementById('cal05-inp');
    let sp5 = document.getElementById('cal05-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(3)), parseFloat(act1_h.toFixed(3)))) {
        alert('h value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp5.remove();
    sp5.innerText = `${(act1_h).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_qs() {
    let btn = document.getElementById('btn_act1_qs');
    let div = document.getElementById('act1_chl');
    let inp6 = document.getElementById('cal06-inp');
    let sp6 = document.getElementById('cal06-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(3)), parseFloat(act1_qs.toFixed(3)))) {
        alert('Qs is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp6.remove();
    sp6.innerText = `${(act1_qs).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_chl() {
    let btn = document.getElementById('btn_act1_chl');
    let div = document.getElementById('act1_t_grpr');
    let inp7 = document.getElementById('cal07-inp');
    let sp7 = document.getElementById('cal07-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(3)), parseFloat(act1_ch_l.toFixed(3)))) {
        alert('Reduction percentage is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp7.remove();
    sp7.innerText = `${(act1_ch_l).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_t_grpr() {
    let btn = document.getElementById('btn_act1_t_grpr');
    let inp8 = document.getElementById('cal08-inp');
    let sp8 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(3)), parseFloat(act1_t_grpr.toFixed(3)))) {
        alert('Gr Pr value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp8.remove();
    sp8.innerText = `${(act1_t_grpr).toFixed(2)}`;
    if (act1_t_grpr >= 1e5 && act1_t_grpr <= 1e7) {
        let div = document.getElementById('act1_t_h');
        div.style.display = 'block';
    }
    else if (act1_t_grpr > 2e7 && act1_s_grpr <= 2e10) {
        let div = document.getElementById('act1_t_h1');
        div.style.display = 'block';
    }
}
function verify_act1_t_h() {
    let btn = document.getElementById('btn_act1_t_h');
    let div = document.getElementById('act1_qt');
    let inp9 = document.getElementById('cal09-inp');
    let sp9 = document.getElementById('cal09-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(3)), parseFloat(act1_t_h.toFixed(3)))) {
        alert('h is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp9.remove();
    sp9.innerText = `${(act1_t_h).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_t_h1() {
    let btn = document.getElementById('btn_act1_t_h1');
    let div = document.getElementById('act1_qt');
    let inp10 = document.getElementById('cal10-inp');
    let sp10 = document.getElementById('cal10-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(3)), parseFloat(act1_t_h.toFixed(3)))) {
        alert('h is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp10.remove();
    sp10.innerText = `${(act1_t_h).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_qt() {
    let btn = document.getElementById('btn_act1_qt');
    let div = document.getElementById('act1_q');
    let inp11 = document.getElementById('cal11-inp');
    let sp11 = document.getElementById('cal11-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp11.value).toFixed(3)), parseFloat(act1_qt.toFixed(3)))) {
        alert('Qt is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp11.remove();
    sp11.innerText = `${(act1_qt).toFixed(2)}`;
    div.style.display = 'block';
}
function verify_act1_q() {
    let btn = document.getElementById('btn_act1_q');
    let inp17 = document.getElementById('cal17-inp');
    let sp17 = document.getElementById('cal17-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp17.value).toFixed(3)), parseFloat(act1_q.toFixed(3)))) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp17.remove();
    sp17.innerText = `${(act1_q).toFixed(2)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map
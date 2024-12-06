function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate average heat transfer coefficent. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3'>Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate average heat transfer coefficent", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> A vertical plate is under free convection with still air at ${act2_t1}<sup>o</sup>C. The plate is heated at ${act2_t2}<sup>o</sup>C from one side. Find local heat transfer coefficient at ${act2_l}cm from lower edge. Also find average heat transfer coefficient over ${act2_l}cm.   </h5>
        <h5> $$ Use\\ \\ Nu_x = 0.52 (\\frac{P_r^2 G_r}{0.95 + P_r})^{1/4} $$ </h5>
        <h5> The properties at mean temperature are: </h5>
        <h5>$$\\rho = ${act2_rho}kg/m^3\\ \\ \\ \\ \\ \\ \\ C_P = ${act2_cp}J/Kg-k $$</h5>
        <h5>$$ K = ${act2_k}\\ \\ \\ \\ \\ \\ \\ \\nu = ${act2_nu_disp}*10^{-6}m^2/s\\ \\ \\ \\ \\ \\ \\ P_r = ${act2_pr} $$</h5>
        <br><br>

        <h5>Mean temperature</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ T_m = \\frac{T_s + T_f}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span>

            <button class='btn btn-info std-btn' onclick='verify_act2_tm();' id='btn_act2_tm' style="width:20%">Verify</button>
        </p>

        <div id="act2_beta" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;'>
                <span style='display: inline-block;' >
                    $$ \\therefore coefficient\\ of\\ thermal\\ expansion $$
                    $$ \\beta = \\frac{1}{T_m} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> w/m<sup>o</sup>K<sup>-1</sup>

                <button class='btn btn-info std-btn' onclick='verify_act2_beta();' id='btn_act2_beta' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_gr" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ G_r = \\frac{g \\beta \\Delta T L^3}{\\nu^2} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal14-inp'> <span id='cal14-val-sp'></span>

                <button class='btn btn-info std-btn' onclick='verify_act2_gr();' id='btn_act2_gr' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_hx" style="display: none">
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ Nu_x = 0.52 (\\frac{P_r^2 G_r}{0.95+P_r})^{1/4} $$
                    $$ \\frac{h_x L}{K} = 0.52 (\\frac{P_r^2 G_r}{0.95+P_r})^{1/4} $$
                    $$ Local\\ heat\\ transfer\\ coefficient $$
                    $$ h_x = 0.52 \\frac{K}{L} (\\frac{P_r^2  G_r}{0.95 + P_r})^{1/4} $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal15-inp'> <span id='cal15-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act2_hx();' id='btn_act2_hx' style="width:20%">Verify</button>
            </p>
        </div>

        <div id="act2_hav" style="display: none">
            <h5>Average heat transfer coefficient</h5>
            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ h_{av} = \\frac{1}{L} \\int_0^L h_x dx $$
                    $$ h_{av} = \\frac{4}{3} h_x $$
                </span>
                = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal16-inp'> <span id='cal16-val-sp'></span> w/m<sup>2</sup>-k

                <button class='btn btn-info std-btn' onclick='verify_act2_hav();' id='btn_act2_hav' style="width:20%">Verify</button>
            </p>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    let num = Math.floor(Math.random() * (10)) + 1;
    let ts = act1_t1 + num;
    let tf = act1_t2 - num;
    act2_tm = (ts + tf) / 2;
    act2_beta = 1 / (act2_tm + 273);
    let act2_l_val = act2_l / 100;
    act2_gr = (g * act2_beta * (ts - tf) * Math.pow(act2_l_val, 3)) / Math.pow(act2_nu, 2);
    act2_hx = 0.52 * (act2_k / act2_l_val) * Math.pow(((Math.pow(act2_pr, 2) * act2_gr) / ((0.95 + act2_pr))), (1.0 / 4.0));
    act2_hav = (4 / 3) * act2_hx;
    console.log("act2 t1= ", act2_t1);
    console.log("act2 t2= ", act2_t2);
    console.log("act2 num= ", num);
    console.log("act2 ts= ", ts);
    console.log("act2 tf= ", tf);
    console.log("act2 tm= ", act2_tm);
    console.log("act2 beta= ", act2_beta);
    console.log("act2 Gr= ", act2_gr);
    console.log("act2 hx= ", act2_hx);
    console.log("act2 hav= ", act2_hav);
}
function verify_act2_tm() {
    let btn = document.getElementById('btn_act2_tm');
    let div = document.getElementById('act2_beta');
    let inp12 = document.getElementById('cal12-inp');
    let sp12 = document.getElementById('cal12-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp12.value).toFixed(3)), parseFloat(act2_tm.toFixed(3)))) {
        alert('Tm value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp12.remove();
    sp12.innerText = `${(act2_tm).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_beta() {
    let btn = document.getElementById('btn_act2_beta');
    let div = document.getElementById('act2_gr');
    let inp13 = document.getElementById('cal13-inp');
    let sp13 = document.getElementById('cal13-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp13.value).toFixed(2)), parseFloat(act2_beta.toFixed(2)))) {
        alert('Beta value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp13.remove();
    sp13.innerText = `${(act2_beta).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_gr() {
    let btn = document.getElementById('btn_act2_gr');
    let div = document.getElementById('act2_hx');
    let inp14 = document.getElementById('cal14-inp');
    let sp14 = document.getElementById('cal14-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp14.value).toFixed(3)), parseFloat(act2_gr.toFixed(3)))) {
        alert('Gr value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp14.remove();
    sp14.innerText = `${(act2_gr).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_hx() {
    let btn = document.getElementById('btn_act2_hx');
    let div = document.getElementById('act2_hav');
    let inp15 = document.getElementById('cal15-inp');
    let sp15 = document.getElementById('cal15-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp15.value).toFixed(3)), parseFloat(act2_hx.toFixed(3)))) {
        alert('Hx value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp15.remove();
    sp15.innerText = `${(act2_hx).toFixed(3)}`;
    div.style.display = 'block';
}
function verify_act2_hav() {
    let btn = document.getElementById('btn_act2_hav');
    let inp16 = document.getElementById('cal16-inp');
    let sp16 = document.getElementById('cal16-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp16.value).toFixed(3)), parseFloat(act2_hav.toFixed(3)))) {
        alert('Hav value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp16.remove();
    sp16.innerText = `${(act2_hav).toFixed(3)}`;
    exp_complete();
}
function exp_complete() {
    alert('Experiment completed');
}
//# sourceMappingURL=activity2.js.map
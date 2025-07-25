let welcomeText = "Welcome!\nContinue by signing in with username 'guest'.";
// You can give your oqn welcome text here no need for my name
let sss = welcomeText.replace('\n', '<br><br>');
document.getElementById('welcomeText1').innerHTML = sss;
let delay = 50; //delay in ms
setInterval(() => {
    const qw = document.getElementById('welcomeText1').offsetHeight + 100;

    document.getElementById('welcomeText').style.height = qw + 'px';
    //console.log(qw)

    // document.getElementById("welcomeText1").style.display = "none"
}, 0);

let listOfCommands = [
    'help',
    'clear',
    'ls',
    'cat',
    'date',
    'cd',
    'mv',
    'rm',
    'rmdir',
    'touch',
    'flag',
    'fork',
    'sudo',
];
let commandInfo = {
    help: 'lists all the commands', //done
    ls: 'List information about the files and folders.', //done
    cat: 'Read FILE(s) content and print it to the standard output(screen).', //done
    date: 'Print the system date and time.', //done
    clear: 'Clear the terminal screen.', //done
    cd: 'Change the current working directory.', //done
    mv: 'Move(rename) files.', //done
    rm: 'Remove files or directories.', //done
    rmdir:
        'Remove directory, this command will only work if the folders are empty.', //done
    touch:
        "Change file timestamps.If the file doesn't exist, it's created an empty one.",
    sudo: 'Execute a command as the superuser.<br><br>',
    flag: 'Check it out :)',
    fork: 'Fork this repository',
};

let arrowIndex = -1;
let history = [];
let listOfFiles = {
    // If you want to add a website link use the anchor tab like in credits, href points to the url, you can give any text between<a></a>
    "About_Me.txt": () => {
        historyCommands += `<pre style="display:inline">
⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ Vinayak dubey
⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿  Cybersecurity professional
⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿   Scaled infrastructures by 100x
⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿    End to End cybersecurity solutions
⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿    Incident response
⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿   security engineering
⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿   open source
⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿  Self-hosting enthusiast
⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿   Infrastructure reliability
⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿    
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
</pre>Executed critical projects for defense research organizations & military. Delivered cybersecurity training to military personnel, NGOs, & students. Looking to scale & lead security initiatives in high-impact environments.`
    },
    "Contact_Me.txt": () => {
        historyCommands += `<pre style="display:inline">

           |\`-.._____..-\'|
           :  > .  ,  <  :
           \`./ __\`' __ \,'
            | (|_) (|_) |         
            ; _  .  __  :
            \`.,' - \`-. ,'
              \`, \`_  .'         
              /       \\
             /         :
            :          |_
           ,|  .    .  | \\
          : :   \\   |  |  :
          |  \\   :\`-;  ;  |       Email: vinayak.delta@gmail.com
          :   :  | /  /   ;       Twitter: <a href = 'https://twitter.com/_vinylic_' target='_blank'>_vinylic_</a>
           :-.'  ;'  / _,'\`------.
           \`'\`''-\`'''-'-''--.---  )
                        SSt \`&lt;--
</pre>`

    },
    "Github.txt": () => {
        historyCommands += `<pre style="display:inline">

               :\\     /;               _
              ;  \\___/  ;             ; ;
             ,:-"'   \`"-:.            / ;
        _   /,---.   ,---.\\   _     _; /
        _:>((  |  ) (  |  ))<:_ ,""_,
            \\'''''   '''''/"""",-""
             '-.._ v _..-'      )
               / ___   ____,..  \\
              / /   | |   | ( \\. \\
        ctr  / /    | |    | |  \\ \\
             \`"     \`"     \`"    \`"
        </pre><a href = 'https://github.com/viny1ic' target='_blank'>https://github.com/viny1ic</a><br><br>`

    },
    "Linkedin.txt": () => {
        historyCommands += `<pre style="display:inline">

                 __
              __/ ^\\
        PIYO /     \\ PIYO
             \\_____/
             <    \\/
        </pre><a href = 'https://www.linkedin.com/in/vinylic/' target='_blank'>https://www.linkedin.com/in/vinylic/</a><br><br>`


    },
    "Credits.txt": () => {
        historyCommands += `<pre style="display:inline"> 
 ________________________________
/ Template by me and R Narayan:  \\
\\ https://github.com/bitoffabyte /
 --------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</pre>`
    }
};

const listOfAuto = [...listOfCommands];
const listofAutos = [...Object.keys(listOfFiles).map((i) => 'cat ' + i)];

// Navbar Date
let d = new Date();
days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let day = days[d.getDay()];
let hr = d.getHours();
let min = d.getMinutes();
let time = hr + ':' + min;
document.getElementById('date').innerText =
    days[d.getDay()] +
    ' ' +
    (d.getHours() < 10 ? '0' : '') +
    d.getHours() +
    ':' +
    (d.getMinutes() < 10 ? '0' : '') +
    d.getMinutes();

// Terminal Commands
let ton = true;
const Terminalon = () => {
    document.querySelector('#ter').style.display = 'block';
    foc();
    ton = true;
};
const Terminalonn = () => {
    if (ton) {
        document.querySelector('#ter').style.display = 'none';
        ton = false;
    } else {
        document.querySelector('#ter').style.display = 'block';
        ton = true;
    }
    foc();
};
// setInterval()
let his = document.getElementById('history');
let textInput = document.querySelector('#input');

textInput.focus();

document.querySelector(".terminal").scrollTo(0, 0);
let historyCommands = `<pre style="display:inline">
██╗   ██╗██╗███╗   ██╗ █████╗ ██╗   ██╗ █████╗ ██╗  ██╗
██║   ██║██║████╗  ██║██╔══██╗╚██╗ ██╔╝██╔══██╗██║ ██╔╝
██║   ██║██║██╔██╗ ██║███████║ ╚████╔╝ ███████║█████╔╝ 
╚██╗ ██╔╝██║██║╚██╗██║██╔══██║  ╚██╔╝  ██╔══██║██╔═██╗ 
 ╚████╔╝ ██║██║ ╚████║██║  ██║   ██║   ██║  ██║██║  ██╗
  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
</pre>Welcome to portfolio OS. <br>Use the command line to interact, start with 'help'<br>Or use the side nav bar on the left<br>Can you find the hidden flag?`;
let clText = '<span id = "path">guest@vinayak.wiki:~$</span>';//this should be changed
his.innerHTML = historyCommands;

const autoFill = (txt) => {
    let ch = false;
    listOfAuto.some((i) => {
        if (
            i.substr(0, txt.length).toUpperCase() ==
                txt.substr(0, txt.length).toUpperCase() &&
            i.length != txt.length &&
            txt != ''
        ) {
            textInput.focus();
            textInput.value = i;
            textInput.focus();
            ch = true;
        }
    });
    if (!ch) {
        listofAutos.some((i) => {
            if (
                i.substr(0, txt.length).toUpperCase() ==
                    txt.substr(0, txt.length).toUpperCase() &&
                i.length != txt.length &&
                txt != ''
            ) {
                textInput.focus();
                textInput.value = i;
                textInput.focus();
            }
        });
    }
};

const scrollToBot = () => {
    document
        .querySelector('.terminal')
        .scrollTo(0, document.querySelector('.terminal').scrollHeight);
};
const comm = (ele, yn = false) => {
    if (yn) {
        let command = ele;
        textInput.value = '';
        historyCommands += clText + '<p class = "aaa"> ' + command + '</p>';
        if (
            listOfCommands.includes(command) ||
            listOfCommands.includes(command.split(' ')[0])
        ) {
            commandFunction(command);
        } else {
            historyCommands +=
                "<br>'" +
                command +
                "'" +
                " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
        }
        his.innerHTML = historyCommands;
        document
            .querySelector('.terminal')
            .scrollTo(0, document.querySelector('.terminal').scrollHeight);
    } else if (event.key === 'Enter') {
        let command = textInput.value;
        textInput.value = '';
        historyCommands += clText + '<p class = "aaa"> ' + command + '</p>';
        if (
            listOfCommands.includes(command) ||
            listOfCommands.includes(command.split(' ')[0])
        ) {
            commandFunction(command);
        } else {
            if (command != '')
                historyCommands +=
                    "<br>'" +
                    command +
                    "'" +
                    " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
            else historyCommands += '<br>';
        }
        his.innerHTML = historyCommands;
        document
            .querySelector('.terminal')
            .scrollTo(0, document.querySelector('.terminal').scrollHeight);
        history.unshift(command);
    } else if (event.key == 'Tab') {
        textInput.focus();
        foc();
        autoFill(textInput.value);
        foc();
    } else if (event.key == 'ArrowDown') {
        if (arrowIndex > 0) {
            arrowIndex--;
            event.key = '';
            document.querySelector('button').focus();
            textInput.value = history[arrowIndex];
        }
    } else if (event.key == 'ArrowUp') {
        if (arrowIndex < history.length - 1) {
            event.key = '';
            arrowIndex++;
            document.querySelector('button').focus();

            textInput.value = history[arrowIndex];
            moveCursorToEnd();
        }
    }
    //console.log(history);
    //console.log(arrowIndex);

    textInput.focus();
};

//ADD MORE FILES HERE
const abtMe = () => {
    Terminalon();
    setTimeout(() => comm('cat About_Me.txt', true), 100);
    textInput.focus();
};
const linkedin = () => {
    Terminalon();
    setTimeout(() => comm('cat Linkedin.txt', true), 100);
    textInput.focus();
};
const github = () => {
    Terminalon();
    setTimeout(() => comm('cat Github.txt', true), 100);
    textInput.focus();
};
const contact = () => {
    Terminalon();
    setTimeout(() => comm('cat Contact_Me.txt', true), 100);
    textInput.focus();
};
const credits = () => {
    Terminalon();
    setTimeout(() => comm('cat Credits.txt', true), 100);
    textInput.focus();
}

const nonSudo = (w) => {
    historyCommands += "Unable to '" + w + "', Permission Denied!<br>";
};

String.prototype.toEncodedString = function () {
    var ostr = this.toString().replace(/\s+/g, '');
    if (ostr.length < 8) {
        alert('Password must be at least 8 characters long with no spaces.');
        return null;
    }
    var x,
        nstr = '',
        len = ostr.length;
    for (x = 0; x < len; ++x) {
        nstr += (255 - ostr.charCodeAt(x))
            .toString(36)
            .toUpperCase()
            .toPaddedString(2, '0');
    }
    return nstr;
};
String.prototype.fromEncodedString = function () {
    var ostr = this.toString();
    var x,
        nstr = '',
        len = ostr.length;
    for (x = 0; x < len; x += 2) {
        nstr += String.fromCharCode(255 - parseInt(ostr.substr(x, 2), 36));
    }
    return nstr;
};
Number.prototype.toPaddedString = function (len, pad) {
    len = len ? Number(len) : 2;
    if (isNaN(len)) {
        alert("Padded String 'length' argument is not numeric.");
        return null;
    }
    var dflt = isNaN(this.toString()) ? ' ' : '0';
    pad = pad ? pad.toString().substr(0, 1) : dflt;
    var str = this.toString();
    if (dflt == '0') {
        while (str.length < len) str = pad + str;
    } else {
        while (str.length < len) str += pad;
    }
    return str;
};
String.prototype.toPaddedString = Number.prototype.toPaddedString;

const flag = (s) => {
    //console.log(s)
    if (
        s[1].toEncodedString() ==
        '3T46413Q43464C3O4O5R4O4G3Q5R4Q4G475N3T5O4G495R3U4X574G3V475O4G555Q5N484G54543M'
    ) {
        historyCommands += '<br>Nice!!';
        historyCommands += `<br>You have found the flag. Write to me for a prize!`;
    } else {
        historyCommands += '<br>Sorry Wrong flag, Try again';
    }
};

const commandFunction = (c) => {
    if (c == 'help') {
        historyCommands += '<br>' + 'Here are a list of commands';
        for (let i = 0; i < listOfCommands.length; i++) {
            historyCommands +=
                '<br>' +
                listOfCommands[i] +
                ' : ' +
                commandInfo[listOfCommands[i]];
        }
        historyCommands +=
            'Press Tab for Autofill<br>Use arrow keys to get to past commands';
    }
    if (c == 'clear') {
        historyCommands = '';
        textInput.value = '';
    }
    let s = c.split(' ');
    if (c == 'ls') {
        Object.keys(listOfFiles).map((i) => {
            historyCommands += i + '<br>';
        });
        historyCommands += '<br>';
    }
    if (s[0] == 'cat') {
        let file = s[1];
        if (Object.keys(listOfFiles).includes(file)) {
            listOfFiles[file]();
        } else if ((s.length = 1)) {
            historyCommands += 'Please specify a file<br>';
        } else {
            historyCommands += file + ' not found';
        }
    }
    if (c == 'date') {
        let da = new Date();
        historyCommands +=
            days[da.getDay()] +
            ' ' +
            (da.getHours() < 10 ? '0' : '') +
            da.getHours() +
            ':' +
            (da.getMinutes() < 10 ? '0' : '') +
            da.getMinutes();
    }
    if (
        c == 'cd' ||
        c == 'rm' ||
        c == 'mv' ||
        c == 'rmdir' ||
        c == 'touch' ||
        c == 'sudo'
    ) {
        nonSudo(c);
    }
    if (c == 'flag') {
        historyCommands +=
            "Hint: Counter Strike Source was such a nice game!, with amazing bases<br>To submit flag type 'flag vinylic{flag}'<br>flag is present in the same format";
    } else if (s[0] == 'flag') {
        flag(s);
    }
    if (c == 'fork') {
        historyCommands +=
            "You can fork this website <br><a href ='https://github.com/rootnarayan/Kali-Linux-GUI' target='_blank'>here</a>";
    }

    scrollToBot();
};
const foc = () => {
    textInput.focus();
};

document.getElementById('cl').addEventListener('click', () => {
    comm('clear', true);
    ton = false;
    document.querySelector('#ter').style.display = 'none';
});

document.getElementById('min').addEventListener('click', () => {
    ton = false;
    document.querySelector('#ter').style.display = 'none';
});

// Code for dragging terminal around

let dragItem = document.querySelector('#fakeMenu');
let container = document.querySelector('body');

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const dragStart = (e) => {
    if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
    }
};

const dragEnd = (e) => {
    initialX = currentX;
    initialY = currentY;
    active = false;
};

const drag = (e) => {
    if (active) {
        e.preventDefault();

        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, document.querySelector('#ter'));
    }
};

let m = false;
let fresh = false;
const maximize = (c) => {
    document.querySelector('#ter').style.width = '99.5%';
    document.querySelector('#ter').style.height = '100%';
    document.querySelector('.terminal').style.width = '100%';
    document.querySelector('.terminal').style.height = '83%';
    document.querySelector('.terminal').style.paddingBottom = '100%';
    document.querySelector('#fakeMenu').style.width = '100%';
    document.querySelector('#fakeMenu2').style.width = '100%';
    let y = Math.floor(
        document.querySelector('.navbar').getBoundingClientRect().bottom +
            document.documentElement.scrollTop
    );
    document.querySelector('#ter').style.transform =
        'translate3d(' + -25 + '%, ' + -15 + '%, 0)';
    m = true;
    fresh = true;
    textInput.focus();
};
const minimize = () => {
    document.querySelector('#ter').style.width = '50%';
    document.querySelector('#ter').style.height = '50%';
    document.querySelector('.terminal').style.width = '100%';
    document.querySelector('.terminal').style.height = '100%';
    document.querySelector('#fakeMenu').style.width = '100%';
    document.querySelector('#fakeMenu2').style.width = '100%';
    document.querySelector('.terminal').style.paddingBottom = '0%';

    if (fresh) {
        document.querySelector('#ter').style.transform =
            'translate3d(' + -25 + '%, ' + -25 + '%, 0)';
        fresh = false;
    }

    m = false;
    document.getElementById('fakeMenu').style.position = 'static';
    document.getElementById('fakeMenu2').style.position = 'static';
};
const setTranslate = (xPos, yPos, el) => {
    el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    let coord = Math.floor(
        document.querySelector('#ter').getBoundingClientRect().top +
            document.documentElement.scrollTop
    );
    let coord2 = Math.floor(
        document.querySelector('.navbar').getBoundingClientRect().bottom +
            document.documentElement.scrollTop
    );
    if (coord <= coord2) {
        maximize(coord2);
    } else {
        minimize();
    }
};
container.addEventListener('touchstart', dragStart, false);
container.addEventListener('touchend', dragEnd, false);
container.addEventListener('click', drag, false);

container.addEventListener('mousedown', dragStart, false);
container.addEventListener('mouseup', dragEnd, false);
container.addEventListener('mousemove', drag, false);
window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4)
            )
        )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
document.getElementById('max').addEventListener('click', () => {
    if (!mobileCheck()) {
        if (!m) {
            maximize();
        } else {
            minimize();
        }
    } else {
        alert('resize not available on mobile');
    }
});

// Welcome screen
const loginAuth = () => {
    //console.log(event.key);

    if (event.key == 'Enter') {
        let un = event.target.value;

        if (un == 'guest') {
            document.querySelector('.login').style.display = 'none';
            // .hlog,.hlogg,.body
            document.querySelector('.hlog').style.display = 'block';
            document.querySelector('.hlogg').style.display = 'block';
            document.querySelector('.body').style.display = 'block';
        } else {
            document.getElementById('nn').style.display = 'block';
        }
    }
};
document.getElementById('welcomeText').innerText = '';

let i = 0;
const del = () => {
    if (i < welcomeText.length) {
        var char = welcomeText.charAt(i);
        var newLine = char === '\n';
        document.getElementById('welcomeText').innerHTML += newLine
            ? '<br><br>'
            : char;

        i++;
        setTimeout(del, newLine ? delay * 2 : delay);
    }
};
del();

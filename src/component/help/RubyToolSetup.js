import React, { Component } from 'react';
import imgp1 from "./image/imgp1.png"
import imgp2 from "./image/imgp2.png"
import imgp3 from "./image/imgp3.png"
import imgp4 from "./image/imgp4.png"
import imgp5 from "./image/imgp5.png"
import imgp6 from "./image/imgp6.png"
import imgp7 from "./image/imgp7.png"
import imgp8 from "./image/imgp8.png"
import imgp9 from "./image/imgp9.png"

class RubyToolSetup extends Component {
    render() {
        return (
            <div>
                <a href="#demo1" className="btn btn-info" data-toggle="collapse">Ruby tool setup to run</a>
                <div id="demo1" className="collapse onboardingImg">
                    <h3>Ruby tool setup to run the URL Process</h3>
                    <h4>1. Create the folder with today's date ( latest date )</h4>
                    <img src={imgp1} alt="vpn" />
                    <h4>2. Move to created path from terminal</h4>
                    <p>Cd /home/ashukla/Documents/workspace/09012020_Cutover/sandboxCutover_0901 </p>
                    <img src={imgp2} alt="vpn" />
                    <h4>3. Get codebase using  following  url</h4>
                    <p>git clone  https://github.com/mdsol/meds-test.git</p>
                    <p>it will ask username and password of git.</p>
                    <p>(project will download from master branch)</p>
                    <img src={imgp3} alt="vpn" />
                    <h4>4. Switch to related branch as follows</h4>
                    <p>Eg: taking as sandbox branch</p>
                    <p>git checkout -b sandbox</p>
                    <img src={imgp4} alt="vpn" />
                    <h4>5. To cross verify the branch name (it should be sandbox)</h4>
                    <p>git branch -a</p>
                    <img src={imgp5} alt="vpn" />
                    <h4>6. Take the latest pull from sandbox branch</h4>
                    <p>git pull origin sandbox (to get the latest code of git )</p>
                    <p>git username</p>
                    <p>git password (github token password )</p>
                    <img src={imgp6} alt="vpn" />
                    <p>If any code updates imported then how to give as follows</p>
                    <p>:q </p>
                    <h3>Command to run the tool:</h3>
                    <p>-- ruby lib/medscompare.rb db_meds db_meds_public hgsbxrave119</p>
                    <h4>7. How to generate new token in github</h4>
                    <p>1> Login into the github</p>
                    <p>we need to go to setting > developer setting > personal access token</p>
                    <img src={imgp7} alt="vpn" />
                    <p>2> Generate new token</p>
                    <img src={imgp8} alt="vpn" />
                    <p>3> After that one token will be generated.Token will be password for in as a git password.</p>
                    <img src={imgp9} alt="vpn" />
                </div >
            </div >
        );
    }
}

export default RubyToolSetup;
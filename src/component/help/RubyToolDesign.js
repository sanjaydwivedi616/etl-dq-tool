import React, { Component } from 'react';
import imgr1 from "./image/imgr1.png"
import imgr2 from "./image/imgr2.png"
import imgr3 from "./image/imgr3.png"
import imgr4 from "./image/imgr4.png"
import imgr5 from "./image/imgr5.png"

class RubyToolDesign extends Component {
    render() {
        return (
            <div>
                <a href="#RubyTooldesign" className="btn btn-info" data-toggle="collapse">Ruby Tool design Specification</a>
                <div id="RubyTooldesign" className="collapse onboardingImg">
                    <p>Status:  Initial draft, Feb 2020</p>
                    <h2>Purpose of Tool</h2>
                    <p>DQ tool's main purpose is to generate the detailed report which includes the comparison between .</p>
                    <h4>1. RODS to MEDS(R2M) :</h4>
                    <p>RODS is a staging of the RAVE system and will compare from RODS to MEDS as row wise as well as attribute wise from table level.
                        For example rows in RODS only , rows in MEDS only ,match count etc.</p>
                    <h4>2. MEDS to MODM :</h4>
                    <p>MEDS data is coming from RODS and the system will compare from MEDS to MODM as row wise as well as attribute wise from table level.
                        For example rows in MEDS only , rows in MODM only , match count etc.</p>
                    <p>Overall  tool will give the meta data reports from RODS to MEDS (R2M) comparison as  well as MEDS to MODM comparison from table level.</p>
                    <h2>Overview</h2>
                    <p>Tool is comparing the data(rows or attributes)  between the databases like RODS to MEDS and MEDS to MDOM with specific transformation logic and giving the health reports on overall the data health on table wise.
                    Tool generated report is basic raw data which includes the number of rows/count from db level , table level comparison which is not visualised from raw data generated from tool.
                    So raw data manually copying and paste only into google excel sheet with respect date tab which contains all formats to visualize the same.
                    From formatted google excel sheet of detailed report again manually creating a summary report which is a kind of pivot table taking basic input data from detailed report to understand data percentages across the urls and table.</p>
                    <h4>Detail report screenshot:</h4>
                    <img src={imgr1} alt="vpn" />
                    <h4>Summary report screenshot:</h4>
                    <img src={imgr2} alt="vpn" />
                    <h2>Technical Specification</h2>
                    <p>Tool is mainly designed on ruby programing language as command prompt /standalone application to generate the comparison report.</p>
                    <p>1. GIT using as code versioning tool </p>
                    <p>2. Ruby 2.3+</p>
                    <p>3. Ruby-oci8 gem specification</p>
                    <p>4. Running on Amazon workspaces through VPN connection</p>
                    <p>5. Oracle Instant Client as per operating system</p>
                    <h2>Monitoring code updates</h2>
                    <p>All code updates and maintenance going through the GitHub repository . whenever code changes required then will update the code in repository according to the Git process life cycle(add, commit, push).</p>
                    <p>Repository name : mdsol/meds-test </p>
                    <p>Clone url: </p>
                    <p>Clone with HTTPS → <a href="https://github.com/mdsol/meds-test.git " target="_blank"  rel="noopener noreferrer">https://github.com/mdsol/meds-test.git</a> </p>
                    <p>Clone with SSH → <a href="git@github.com:mdsol/meds-test.git" target="_blank"  rel="noopener noreferrer">git@github.com:mdsol/meds-test.git</a> </p>
                    <p>Sample command to clone following with username and password : </p>
                    <p>git clone <a href=" https://github.com/mdsol/meds-test.git " target="_blank"  rel="noopener noreferrer"> https://github.com/mdsol/meds-test.git</a></p>
                    <h2>File Structure</h2>
                    <p>After job execution from the tool, the system will create output file structure as follows \meds-test\meds-compare\diff.</p>
                    <p>Diff folder creates following folder structure with timestamp folder</p>
                    <img src={imgr3} alt="vpn" />
                    <p>stats_timestamp.csv  file is output raw data of comparison report  and same data in yml format is stats_timestamp.yml.</p>
                    <p>All other details like in r2m only , matching records etc  will be available in in above url specific folder(eg: HGSBXRAVE274) as follows</p>
                    <img src={imgr4} alt="vpn" />
                    <p>Compare.rb and medscompare.rb core business logic files .</p>
                    <h4>Config folder:</h4> <p>it contains the configuration details like meds and rods database connections, type of arguments passed , config details used etc</p>
                    <img src={imgr5} alt="vpn" />
                    <h4>Config.yml :</h4> <p>It is the heart of entire configuration ie it contains following list of items</p>
                    <p>1. tables basic queries </p>
                    <p>2. bridge between rods to meds</p>
                    <p>3. List of Meds tables with respect to queries usually tables divided as follows </p>
                    <p>a. Not compared</p>
                    <p>b. URL</p>
                    <p>c. CLIDIV</p>
                    <p>d. STU</p>
                    <p>e. LANGUAGE</p>
                    <p> f. STU_SBJ_FRM</p>
                    <p>g. STU_SBJ_ITM</p>
                    <p>4. List of Rods tables with respect to quires</p>
                    <p>5. Rules</p>
                    <p>a. Key_column_regexp</p>
                    <p>b. Key_column</p>
                    <p>c. Skip_column_regexp</p>
                    <p>d. Skip_column</p>
                    <p>e. Use_src_uuid</p>
                    <p>f. Foreign_keys</p>
                    <p>g. Exclude_rows</p>
                    <p>h. transform_values</p>
                    <p>6. Rods → Bridge with sql queries </p>
                    <h3>DB Connections:</h3>
                    <p>Database connection details maintaining in the following yml files usual path follows \meds-test\meds-compare\lib\MedsCompare\database</p>
                    <h4>meds_connections.yml :</h4> <p>It contains database details of both MEDS(R2M) and MODM and usual structure is as per following key-value pairs</p>
                    <p>DB_MEDS:</p>
                    <p>MEDS_WORK_SCHEMA: *******</p>
                    <p>MEDS_LOOKUP_SCHEMA: MEDS</p>
                    <p>MEDS_WRITER_SERVER_PORT: '1521'</p>
                    <p>MEDS_WRITER_SERVER_URL: **************</p>
                    <p>MEDS_WRITER_DB_NAME: ****************</p>
                    <p>MEDS_WRITER_DB_PASSWORD: *********</p>
                    <p>MEDS_WRITER_DB_USER_NAME: *********</p>
                    <p>MEDS_STAGE_SCHEMA: STAGE</p>
                    <h4>rods_connections.yml :</h4>
                    <p>it contains database details of RODS and usual structure is as per following key-value pairs</p>
                    <p>DB_RODS|**************:</p>
                    <p>R2M_LOCALE: eng</p>
                    <p>SCHEMA_NAME: *************</p>
                    <p>RODS_WRITER_DB_PASSWORD: ***********</p>
                    <p>RODS_DB_KEY: DB_RODS|*******************</p>
                    <p>RODS_WORK_SCHEMA: WORK</p>
                    <p>RODS_WRITER_SERVER_PORT: '1521'</p>
                    <p>RODS_WRITER_DB_NAME: **************</p>
                    <p>RODS_WRITER_DB_USER_NAME: ***********</p>
                    <p>RODS_WRITER_SERVER_URL: ***************</p>
                    <p>RODS_GLOBAL_DOM_SCHEMA: ************</p>
                    <h2>Inscope and out scope</h2>
                    <h4>In scope:</h4>
                    <p>Dq tool's main purpose is to execute/trigger the jobs as follows and will generate detail reports for the same.</p>
                    <p>a. URL wise (ex: HGSBXRAVE119) </p>
                    <p>Sample command: ruby lib/medscompare.rb DB_MEDS DB_MEDS_PUBLIC HGSBXRAVE119</p>
                    <p>b. Table specific (-t table name) </p>
                    <p>Sample command: ruby lib/medscompare.rb DB_MEDS DB_MEDS_PUBLIC HGSBXRAVE119 -t METADATA_VERS</p>
                    <p>c. Category wise(-t category type)</p>
                    <p>Sample command: ruby lib/medscompare.rb DB_MEDS DB_MEDS_PUBLIC HGSBXRAVE119 -t coding</p>
                    <h4>Out of scope:</h4>
                    <p>1.DQ tool will not generate the summary report from the detailed report. As of now through manual effort coping detailed report into formatted excel sheet and summary report is generating based on excel pivot table.</p>
                    <p>2.not having any option to view date wise or  any other filters to view the summary report , as of now it is all about saving in google drive excel sheets.</p>
                </div>
            </div>
        )
    }
}

export default RubyToolDesign;
import React from 'react';
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyMetrics = () => {

  const detail = [
    {
      quant: "$64,492",
      title: "Total Revenue"
    },
    {
      quant: "$608",
      title: "Total Jobs Avg"
    },
    {
      quant: "$106",
      title: "Tickets Created"
    },
    {
      quant: "66",
      title: "Tickets Scheduled"
    },
    {
      quant: "$19,304.52",
      title: "Outstanding Amount"
    },
    {
      quant: "0",
      title: "Memberships Sold"
    },
    {
      quant: "8",
      title: "Jobs completed"
    },
    {
      quant: "2",
      title: "Total canceled"
    }
  ];

  return (
    <>
      <h3>Company Metrics</h3>
      <div className='company_metrics'>
        {
          detail.map(entity => {
            return(
              <div className='company_metrics_entity'>
                <p className='company_metrics_entity_quant'>{entity.quant}</p>
                <div className='company_metrics_entity_titleIcon'>
                  <p className='company_metrics_entity_titleIcon_title'>{entity.title}</p>
                  <FontAwesomeIcon className='company_metrics_entity_titleIcon_icon' icon={faCircleQuestion} style={{color: "#0b43a2"}} /> 
                </div>                
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}

export default CompanyMetrics
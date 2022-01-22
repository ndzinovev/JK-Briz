<?php
    
    
    $hel_bot = $_POST["username"];
    
     
    if(empty($hel_bot)){     
           
        $message .= "Имя клиента: " . $_POST['dow'] . "<br/>"; 
        $message .= "Телефон: " . $_POST['userphone'] . "<br/>";
                        
        send_mail($message); 
    };
         
        
    function send_mail($message){
        
        $mail_to = "nfrezerv@yandex.ru"; // почта, на которую придет письмо
        
        $subject = 'Заявка с сайта: '.$_SERVER['HTTP_HOST']; 
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
        $mail_header.= "From: ООО Энерготехстрой <informer@$server>\r\n";
                
       mail($mail_to, $subject, $message, $headers);
            
    }
    

    
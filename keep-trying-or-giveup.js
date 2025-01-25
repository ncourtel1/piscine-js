function retry(count, callback)
{
    return async function()
    {
        for(;;)
        {
            try
            {
                let result = await callback(...arguments);
                return result;
            }
            catch(e)
            {
                if (count > 0)
                {
                    count--;
                    continue;
                }
                else throw e;
            }
        }
    }
}

function timeout(delay, callback)
{
    return async function()
    {
        return Promise.race([
            callback(...arguments),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('timeout')), delay)
            )
        ]);
    }
}
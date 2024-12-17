import React from 'react';
interface IconProps {
  icon: string;
  text?: string;
  className?: string;
  onClick?: any;
}

const Icon = ({ icon, text, className, onClick }: IconProps) => {
  /**
   * =====================================================================
   *  변수 선언부
   * =====================================================================
   */
  const ref = useRef<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * =====================================================================
   *  Hook
   * =====================================================================
   */
  useEffect(() => {
    setLoading(true);
  }, [icon]);

  useEffect(() => {
    const getSvg = async () => {
      try {
        const svgIcon = await import(`../../assets/icon/${icon}.svg`);
        ref.current = svgIcon.default as unknown as React.FC<
          React.SVGProps<SVGSVGElement>
        >;
        console.log('svgIcon: ', ref.current);
        setLoading(false);
      } catch (error) {
        console.error('ICON CREATE ERROR >> ', error);
        ref.current = null;
        setLoading(false);
      }
    };
    if (loading) {
      getSvg();
    }
  }, [icon, loading]);

  return (
    <>
      {ref.current && <ref.current className={className} onClick={onClick} />}
      {text}
    </>
  );
};

export default memo(Icon);
